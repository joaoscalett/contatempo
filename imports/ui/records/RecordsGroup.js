import React from 'react'
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';

const RecordDate = () => (
  <Typography color="textSecondary">18/03</Typography>
)

const timeStyle = {fontSize: '1.25rem'}
const RecordTime = () => (
  <Typography style={timeStyle}>{"03:12"}</Typography>
)

const Record = () => (
  <>
  <div style={{margin: '0 0.75rem'}}>
      <RecordTime />
  </div>
  <div style={{margin: '0 0.75rem'}}>
      <RecordTime />
  </div>
  </>
)

const TotalAndDate = ({total, date}) => (
      <div style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
      <Typography variant="h5">{total}</Typography>
      <Typography color="textSecondary" style={{fontSize: '1rem'}}>{date}</Typography>
    </div>
)

const RecordsGroup = ({ records }) => (
  <Paper square style={{padding: '0.5rem'}}>
    <TotalAndDate total="08:33" date="Seg, 12 jul" />
    <Divider />
    {[0,1,2,3].map(i => 
      <div key={i} style={{padding: '1rem 0.75rem'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Record />
        </div>
      </div>
      )}
  </Paper>
)

export default RecordsGroup
