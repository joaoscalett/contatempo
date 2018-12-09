import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Redirect } from '@reach/router';
import { withTracker } from 'meteor/react-meteor-data';

function login() {
  Meteor.loginWithGoogle(
    {requestPermissions: ['email']},
    error => {console.log(Meteor.user().profile.name)}
  );
}

function LoginPage(props) {
    return (
      <div>
        { props.loading ? <h2>Loading...</h2> : ''}
        { props.user ? <Redirect to="/now" noThrow />:
        <button onClick={() => login()}>Login</button>
        }
      </div>
    );
}

export default LoginPageContainer = withTracker(() => {
  return {
    loading: Meteor.loggingIn(),
    user: Meteor.user(),
  }
})(LoginPage);

