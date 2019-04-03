import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ProfileMenu from './ProfileMenu'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
})

class Bar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.grow}
            >
              Contatempo
            </Typography>
            <ProfileMenu />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Bar)
