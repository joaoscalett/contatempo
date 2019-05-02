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

function RecordDetails({ record, open, onClose }) {
  const classes = useStyles()
  const [begin, setBegin] = useState(record.begin)

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onSave={() => {
        console.log(`saving record with new begin = ${begin}`)
        onClose()
      }}
    >
      <List>
        <ListItem className={classes.container}>
          <TextField
            id="datetime-local"
            label="Inicio"
            type="datetime-local"
            value={begin}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setBegin(e.target.value)}
          />
          <TextField
            id="datetime-local"
            label="Fim"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
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
