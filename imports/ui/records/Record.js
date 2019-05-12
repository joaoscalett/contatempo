import React from 'react'
import RecordDetails from './RecordDetails'
import Typography from '@material-ui/core/Typography'

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
        }}
        onClick={() => setRecordDetailsOpen(true)}
      >
        <div>
          <RecordTime time={record.begin} />
        </div>
        <div style={{ marginLeft: '0.75rem' }}>
          <RecordTime time={record.end} />
        </div>
        <div
          style={{
            marginLeft: '0.75rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          fazendo trabalho enorme
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
