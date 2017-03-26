import { Meteor } from 'meteor/meteor';
import React from 'react';
import moment from 'moment';
import { i18n } from 'meteor/universe:i18n';
import RaisedButton from 'material-ui/RaisedButton';
import { green700, red700 } from 'material-ui/styles/colors';
import { _ } from 'lodash';
import Snackbar from 'material-ui/Snackbar';
import ElapsedTimeDisplay from './records/ElapsedTimeDisplay.jsx';
import RecordsList from './records/RecordsList.jsx';
import RecordAdd from './records/RecordAdd.jsx';
import { insert, complete, shareLastMonthReport } from '../../api/records/methods.js';

// the minimum time to record, in milliseconds
// (blocks the stop button until this amount has elapsed)
const MINIMUM = 1000;

// the desired precision (any unit below this will be zero)
const PRECISION = 'seconds';

export default class TrackerPage extends React.Component {

  constructor(props) {
    super(props);

    this.checkSubscriptionTimer = setInterval(() => {
      this.props.checkSubscriptionInterval.set(moment());
    }, 1000);

    // bindings
    this.tick = this.tick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getButtonLabel = this.getButtonLabel.bind(this);
    this.getButtonColor = this.getButtonColor.bind(this);
    this.pastMinimum = this.pastMinimum.bind(this);
    this.getTotalElapsed = this.getTotalElapsed.bind(this);
    this.shareLastMonthReport = this.shareLastMonthReport.bind(this);

    this.state = {
      timer: this.props.incompleteRecord ? setInterval(this.tick, 33) : null,
      now: moment(),
      showReportsSentFeedback: false,
      showShareLimitExceededWarning: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.setState({ timer: undefined });

    clearInterval(this.checkSubscriptionTimer);
  }

  getButtonLabel() {
    return i18n.getTranslation(this.props.incompleteRecord
      ? 'tracker_page.stop'
      : 'tracker_page.start',
    );
  }

  getButtonColor() {
    return this.props.incompleteRecord ? red700 : green700;
  }

  getTotalElapsed() {
    const finishedElapsed = this.props.records
      .filter(record => (this.props.incompleteRecord
        ? record._id !== this.props.incompleteRecord._id
        : true))
      .map(record => moment(record.end).diff(moment(record.begin)))
      .reduce((l, n) => l + n, 0);
    const current = this.props.incompleteRecord
      ? this.state.now.diff(moment(this.props.incompleteRecord.begin))
      : 0;
    return this.props.records
      ? finishedElapsed + current
      : 0;
  }

  shareLastMonthReport() {
    shareLastMonthReport.call({
      date: moment().toDate(),
      userId: Meteor.user()._id,
    }, (error) => {
      if (error) {
        if (error.error === 'records.share.limitExceeded') {
          this.setState({ showShareLimitExceededWarning: true });
        } else {
          // unexpected error. TODO: handle properly (and add logs)
          throw new Error('Unexpected error');
        }
      } else {
        this.setState({ showReportsSentFeedback: true });
      }
    });
  }

  pastMinimum() {
    // TODO: instead of blocking the stop button until minimum time is reached,
    // the ideal would be to discard the record if stopped before the minimum time.
    return this.props.incompleteRecord
      ? moment(this.state.now).diff(moment(this.props.incompleteRecord.begin)) > MINIMUM
      : true;
  }

  handleClick() {
    if (!this.props.incompleteRecord) {
      // start
      insert.call({
        begin: moment().startOf(PRECISION).toDate(),
        end: null,
      });
      const now = moment();
      const timer = setInterval(this.tick, 33);
      this.setState({ timer, now });
    } else {
      // stop
      clearInterval(this.state.timer);
      this.setState({ timer: undefined });

      complete.call({
        id: this.props.incompleteRecord._id,
        end: moment().startOf(PRECISION).toDate(),
      });
    }
  }

  tick() {
    this.setState({ now: moment() });
  }

  render() {
    const buttonHeight = '50px';
    const style = {
      button: {
        width: '100%',
        height: buttonHeight,
      },
      record: {
        fontSize: 28,
        padding: 5,
        listStyleType: 'none',
      },
    };

    const labelStyle = {
      color: '#fff',
      fontWeight: 'bold',
      lineHeight: buttonHeight,
    };

    const maxReportsSend = Meteor.settings.public.maxReportsSend;
    const reportsSentCounter = this.context.currentUser.reportsSentCounter;
    const reportsLeft = maxReportsSend - reportsSentCounter;

    const shareReportButtonLabel =
      `${i18n.getTranslation('tracker_page.share_report')} (${reportsLeft})`;

    // debounce the share report button click so the user doesn't send
    // unintended emails
    const handleShareClick = _.debounce(this.shareLastMonthReport, 500);
    return (
      <div>
        <ElapsedTimeDisplay time={this.getTotalElapsed()} />
        <div style={{ margin: '0 15px' }}>
          {
            this.props.showTrackerButton
            ? <RaisedButton
              backgroundColor={this.getButtonColor()}
              onClick={this.handleClick}
              style={style.button}
              label={this.getButtonLabel()}
              labelStyle={labelStyle}
              disabled={!this.pastMinimum()}
            />
            : null
          }
          {
            this.props.showShareReportButton
            ? <RaisedButton
              onClick={handleShareClick}
              fullWidth
              label={shareReportButtonLabel}
              disabled={reportsLeft <= 0}
            />
            : null
          }
          <RecordAdd />
          <RecordsList records={this.props.records} />
          <Snackbar
            open={this.state.showReportsSentFeedback}
            message={i18n.getTranslation('records.reportsSentFeedback')}
            autoHideDuration={4000}
            onRequestClose={() => {
              this.setState({ showReportsSentFeedback: false });
            }}
          />
          <Snackbar
            open={this.state.showShareLimitExceededWarning}
            message={i18n.getTranslation('records.sharelimitExceeded')}
            autoHideDuration={4000}
            onRequestClose={() => {
              this.setState({ showShareLimitExceededWarning: false });
            }}
          />
        </div>
      </div>
    );
  }
}

TrackerPage.propTypes = {
  incompleteRecord: React.PropTypes.object,
  records: React.PropTypes.array,
  checkSubscriptionInterval: React.PropTypes.object,
  showTrackerButton: React.PropTypes.bool,
  showShareReportButton: React.PropTypes.bool,
};

TrackerPage.contextTypes = {
  currentUser: React.PropTypes.object,
};
