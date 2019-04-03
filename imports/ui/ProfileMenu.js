import React from 'react'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import withUser from '../hocs/withUser'

const avatarSize = 30
const useStyles = makeStyles({
  avatar: {
    width: avatarSize,
    height: avatarSize,
  },
})

function ProfileMenu(props) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
      >
        <Avatar
          src={props.user ? props.user.profile.picture : null}
          alt={props.user ? props.user.profile.name : 'No logged user'}
          className={classes.avatar}
        >
          {props.loggingIn ? '...' : props.user ? null : <AccountCircle />}
        </Avatar>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            Meteor.logout()
            handleClose()
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default withUser(ProfileMenu)
