import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
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

const tags = [
  { id: '1', description: 'Projeto 1' },
  { id: '2', description: 'Outro projeto' },
  { id: '3', description: 'Mais um projeto' },
  { id: '4', description: 'Mais um projeto' },
  { id: '5', description: 'Mais um projeto' },
  { id: '6', description: 'Mais um projeto' },
  { id: '7', description: 'Mais um projeto' },
  { id: '8', description: 'Mais um projeto' },
  { id: '9', description: 'Mais um projeto' },
  { id: '10', description: 'Mais um projeto' },
  { id: '11', description: 'Mais um projeto' },
  { id: '12', description: 'Mais um projeto' },
  { id: '13', description: 'Mais um projeto' },
]

function RecordDetails({ record, open, onClose }) {
  const classes = useStyles()
  const [begin, setBegin] = useState(record.begin)
  const [end, setEnd] = useState(record.end)
  const [description, setDescription] = useState(record.description || '')
  const [newTag, setNewTag] = useState(record.tag || '')

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
            variant="outlined"
            label="Inicio"
            type="datetime-local"
            value={toDatetimeLocal(begin)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setBegin(new Date(e.target.value))}
          />
          <TextField
            variant="outlined"
            label="Fim"
            type="datetime-local"
            value={toDatetimeLocal(end)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setEnd(new Date(e.target.value))}
          />
          <TextField
            variant="outlined"
            label="Description"
            value={description}
            className={classes.textField}
            fullWidth
            placeholder="Say what you're doing"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setDescription(e.target.value)}
          />
        </ListItem>
        <Divider />
        <ListSubheader
          component="div"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Input
            value={newTag}
            className={classes.textField}
            placeholder="Add a tag"
            onChange={e => setNewTag(e.target.value)}
            style={{
              fontWeight: 400,
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Add a tag to the record"
                  onClick={() => {}}
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </ListSubheader>
        <ListItem
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxHeight: '20vh',
            overflowY: 'scroll',
          }}
        >
          {tags.map(tag => (
            <Chip
              key={tag.id}
              label={tag.description}
              onDelete={() => {}}
              style={{ margin: 4 }}
            />
          ))}
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
