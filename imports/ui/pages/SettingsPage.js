import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import Divider from '@material-ui/core/Divider'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import TextField from '@material-ui/core/TextField'

function SetingsPage() {
  const [timezoneDialogOpen, setTimezoneDialogOpen] = React.useState(false)
  const [checked, setChecked] = React.useState(false)
  console.log('Render settings page with state = ', timezoneDialogOpen)

  const handleToggle = () => {
    setChecked(!checked)
  }

  return (
    <Paper square elevation={0}>
      <List subheader={<ListSubheader>General</ListSubheader>}>
        <ListItem button>
          <ListItemText
            primary="Day before month resets"
            secondary="Last day"
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log('clicked the timezone list item!')
            setTimezoneDialogOpen(true)
          }}
        >
          <ListItemText primary="Timezone" secondary="America/Sao_Paulo" />
          <TimezoneSelect
            open={timezoneDialogOpen}
            onClose={() => {
              setTimezoneDialogOpen(false)
            }}
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List subheader={<ListSubheader>Reports</ListSubheader>}>
        <ListItem button>
          <ListItemText
            primary="Email to send reports"
            secondary="teste@email.com"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Send a copy to myself"
            secondary="On my user email"
          />
          <ListItemSecondaryAction>
            <Switch onChange={handleToggle} checked={checked} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  )
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}
const classes = {}
function TimezoneSelect({ open, onClose }) {
  console.log('render timezone select with open = ', open)
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      <List>
        <ListItem className={classes.container}>
          <TextField
            id="datetime-local"
            label="Inicio"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
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

export default SetingsPage
