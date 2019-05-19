import React from 'react'
import RecordDetails from './RecordDetails'
import Typography from '@material-ui/core/Typography'
import LabelIcon from '@material-ui/icons/Label'

const timeStyle = { fontSize: '1.25rem' }
const RecordTime = ({ time }) => (
  <Typography style={timeStyle}>{time.toTimeString().slice(0, 5)}</Typography>
)

function Record({ record }) {
  const [recordDetailsOpen, setRecordDetailsOpen] = React.useState(false)
  return (
    <>
      <div
        role="button"
        key={record.id}
        style={{
          cursor: 'pointer',
          display: 'flex',
          minWidth: 0,
          alignItems: 'center',
          padding: '1rem 0',
          flexWrap: 'wrap',
        }}
        onClick={() => setRecordDetailsOpen(true)}
      >
        <div>
          <RecordTime time={record.begin} />
        </div>
        <div style={{ marginLeft: '0.75rem' }}>
          <RecordTime time={record.end} />
        </div>
        <LabelIcon color="disabled" style={{ marginLeft: 'auto' }} />
        <Typography style={{ marginLeft: '0.25rem' }}>2</Typography>
        <Typography
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Here goes the description of your recorded time.
        </Typography>
      </div>
      <RecordDetails
        record={record}
        open={recordDetailsOpen}
        onClose={() => setRecordDetailsOpen(false)}
      />
    </>
  )
}

export default Record
