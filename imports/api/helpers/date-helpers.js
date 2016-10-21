import moment from 'moment';
import EndOfMonthEnum from '../settings/EndOfMonthEnum';

/**
 * Gets the day interval of the given date
 * @param {Date} date - the given date
 * @return {Object} - an object representing the interval with start and end dates
 */
export const getDayInterval = (date) => {
  const ref = moment(date);

  const start = moment(ref).startOf('day');
  const end = moment(ref).endOf('day');

  return { start, end };
};

/**
 * Gets the month interval of the given date
 * @param {Date} date - the given date
 * @param {String} endOfMonth - indicates when the month ends
 * @return {Object} - an object representing the interval with start and end dates
 */
export const getMonthInterval = (date, endOfMonth) => {
  const endOfMonthValue = EndOfMonthEnum[endOfMonth] || EndOfMonthEnum.LAST_DAY;
  const ref = moment(date);
  const currentMonth = endOfMonthValue === EndOfMonthEnum.DAY_20
    ? moment(ref).subtract(20, 'days').add(1, 'month')
        .month()
    : moment(ref).month();
  const start = endOfMonthValue === EndOfMonthEnum.DAY_20
    ? moment(ref).month(currentMonth - 1).date(21)
        .startOf('day')
    : moment(ref).startOf('month');
  const end = endOfMonthValue === EndOfMonthEnum.DAY_20
    ? moment(ref).month(currentMonth).date(20)
        .endOf('day')
    : moment(ref).endOf('month');

  return { start, end };
};