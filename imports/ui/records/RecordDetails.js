import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Dialog from '../Dialog'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
}))

function toDatetimeLocal(date) {
  const ten = i => (i < 10 ? '0' : '') + i,
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes())
  return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II
}

function RecordDetails({ record, open, onClose }) {
  const classes = useStyles()
  const [begin, setBegin] = useState(record.begin)
  const [end, setEnd] = useState(record.end)

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onSave={() => {
        console.log(`saving record with new begin = ${begin}`)
        console.log('ISOString = ', new Date(begin).toISOString())
        onClose()
      }}
    >
      <List>
        <ListItem className={classes.container}>
          <TextField
            label="Inicio"
            type="datetime-local"
            value={toDatetimeLocal(begin)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => {
              setBegin(new Date(e.target.value))
            }}
          />
          <TextField
            label="Fim"
            type="datetime-local"
            value={toDatetimeLocal(end)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => {
              setEnd(new Date(e.target.value))
            }}
          />
        </ListItem>
        <Divider />
        <ListItem className={classes.container}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            <DeleteIcon className={classes.leftIcon} />
            Delete
          </Button>
        </ListItem>
      </List>
    </Dialog>
  )
}

export default RecordDetails
