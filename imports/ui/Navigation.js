import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import { navigate } from '@reach/router'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

function Navigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={window.location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="/home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="History"
        value="/history"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        value="/settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  )
}

export default Navigation
