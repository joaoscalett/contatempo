import React from 'react'
import RecordDetails from './RecordDetails'
import Typography from '@material-ui/core/Typography'

const timeStyle = { fontSize: '1.25rem' }
const RecordTime = ({ time }) => (
  <Typography style={timeStyle}>{time}</Typography>
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
          alignItems: 'center',
          padding: '1rem 0',
        }}
        onClick={() => setRecordDetailsOpen(true)}
      >
        <div style={{ marginRight: '0.75rem' }}>
          <RecordTime time={record.begin} />
        </div>
        <div style={{ marginLeft: '0.75rem' }}>
          <RecordTime time={record.end} />
        </div>
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
