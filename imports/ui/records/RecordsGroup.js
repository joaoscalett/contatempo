import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import RecordDetails from './RecordDetails'
import Button from '@material-ui/core/Button'
import Dialog from '../Dialog'

const RecordDate = () => <Typography color="textSecondary">18/03</Typography>

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
          padding: '1rem',
        }}
        onClick={() => setRecordDetailsOpen(true)}
      >
        <div style={{ margin: '0 0.75rem' }}>
          <RecordTime time={record.begin} />
        </div>
        <div style={{ margin: '0 0.75rem' }}>
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

const GroupHeader = ({ total, date }) => (
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
  return (
    <Paper square elevation={0}>
      <GroupHeader total="08:33" date="Seg, 12 jul" />
      <Divider />
      {records.map(record => (
        <div key={record.id}>
          <Record record={record} />
          <Divider />
        </div>
      ))}
    </Paper>
  )
}

export default RecordsGroup
