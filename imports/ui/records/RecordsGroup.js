import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Record from './Record'
import RecordDetails from './RecordDetails'
import Button from '@material-ui/core/Button'
import Dialog from '../Dialog'

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

function RecordsGroup({ records }) {
  return (
    <Paper square elevation={0}>
      <GroupHeader total="08:33" date="Seg, 12 jul" />
      <Divider />
      {records.map((record, i) => (
        <div key={record.id}>
          <div style={{ padding: '0 1.5rem' }}>
            <Record record={record} />
          </div>
          {i < records.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </Paper>
  )
}

export default RecordsGroup
