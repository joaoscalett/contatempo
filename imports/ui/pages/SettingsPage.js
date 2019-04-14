import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import Divider from '@material-ui/core/Divider'

function SwitchListSecondary() {
  const [checked, setChecked] = React.useState(false)

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
        <ListItem button>
          <ListItemText primary="Timezone" secondary="America/Sao_Paulo" />
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

export default SwitchListSecondary
