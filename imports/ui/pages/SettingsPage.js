import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Dialog from '../Dialog'
import TimezoneSelect from '../TimezoneSelect'

function SetingsPage() {
  const [timezoneDialogOpen, setTimezoneDialogOpen] = React.useState(false)
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
        <ListItem button onClick={() => setTimezoneDialogOpen(true)}>
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
      <Timezone
        open={timezoneDialogOpen}
        onClose={() => {
          setTimezoneDialogOpen(false)
        }}
      />
    </Paper>
  )
}

function Timezone({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} onSave={onClose}>
      <div style={{ padding: '0.75rem' }}>
        <TimezoneSelect
          options={[
            { label: 'Albania' },
            { label: 'Algeria' },
            { label: 'American Samoa' },
            { label: 'Bahamas' },
            { label: 'Bahrain' },
            { label: 'Bangladesh' },
          ].map(suggestion => ({
            value: suggestion.label,
            label: suggestion.label,
          }))}
          label="Timezone"
          placeholder="Type to search for a timezone"
          noOptionsMessage="No timezone found"
        />
      </div>
    </Dialog>
  )
}

export default SetingsPage
