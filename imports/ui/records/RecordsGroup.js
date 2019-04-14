import React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import RecordDetails from './RecordDetails'

const RecordDate = () => <Typography color="textSecondary">18/03</Typography>

const timeStyle = { fontSize: '1.25rem' }
const RecordTime = () => <Typography style={timeStyle}>{'03:12'}</Typography>

const Record = () => (
  <>
    <div style={{ margin: '0 0.75rem' }}>
      <RecordTime />
    </div>
    <div style={{ margin: '0 0.75rem' }}>
      <RecordTime />
    </div>
  </>
)

const TotalAndDate = ({ total, date }) => (
  <Paper
    elevation={0}
    square
    style={{
      padding: '1rem',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    }}
  >
    <Typography variant="h5">{total}</Typography>
    <Typography color="textSecondary" style={{ fontSize: '1rem' }}>
      {date}
    </Typography>
  </Paper>
)

const RecordsGroup = ({ records }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Paper square elevation={0}>
      <TotalAndDate total="08:33" date="Seg, 12 jul" />
      <Divider />
      {[0, 1, 2, 3].map(i => (
        <div
          role="button"
          key={i}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setOpen(true)
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
            }}
          >
            <Record />
          </div>
          <Divider />
        </div>
      ))}
      <RecordDetails open={open} onClose={() => setOpen(false)} />
    </Paper>
  )
}

export default RecordsGroup
