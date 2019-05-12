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
        justifyContent: 'space-between',
      }}
    >
      <Record record={{ id: 1, begin: new Date(), end: new Date() }} />
      <div>
        <IconButton>
          <StopIcon style={{ fontSize: 32, color: red[600] }} />
        </IconButton>
      </div>
    </Paper>
  )
}

export default CurrentRecord
