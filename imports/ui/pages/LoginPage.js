import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Redirect } from '@reach/router'
import withUser from '../../hocs/withUser'

function login() {
  Meteor.loginWithGoogle({ requestPermissions: ['email'] })
}

function LoginPage(props) {
  return (
    <div>
      {props.loggingIn ? (
        <h2>Loading...</h2>
      ) : props.user ? (
        <Redirect to="/home" noThrow />
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </div>
  )
}

const LoginPageWithUser = withUser(LoginPage)
export default LoginPageWithUser
