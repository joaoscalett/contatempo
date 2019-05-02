import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/styles'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import MuiDialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
})

function Transition(props) {
  return <Slide direction="up" {...props} />
}

function Dialog(props) {
  const { children, onClose, onSave, ...rest } = props
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <MuiDialog
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      aria-labelledby="simple-dialog-title"
      onClose={onClose}
      {...rest}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Seg, 12 de fev
          </Typography>
          <Button color="inherit" onClick={onSave}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </MuiDialog>
  )
}

export default Dialog
