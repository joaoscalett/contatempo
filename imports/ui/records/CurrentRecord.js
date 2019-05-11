import React from 'react'
import Paper from '@material-ui/core/Paper'
import StopIcon from '@material-ui/icons/Stop'
import IconButton from '@material-ui/core/IconButton'
import red from '@material-ui/core/colors/red'
import Record from './Record'

function CurrentRecord() {
  return (
    <Paper
      square
      elevation={0}
      style={{
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Record record={{ id: 1, begin: '12:34', end: '16:57' }} />
      <div style={{ marginLeft: 'auto' }}>
        <IconButton>
          <StopIcon style={{ fontSize: 32, color: red[600] }} />
        </IconButton>
      </div>
    </Paper>
  )
}

export default CurrentRecord
