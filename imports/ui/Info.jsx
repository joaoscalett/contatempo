import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

function login() {
  Meteor.loginWithGoogle(
    {requestPermissions: ['email']},
    error => {console.log(Meteor.user().profile.name)}
  );
}
class Info extends Component {
  render() {
    return (
      <div>
        { this.props.user ? <button onClick={() => Meteor.logout()}>Logout</button> :
        <button onClick={() => login()}>Login</button>
        }
        <h1>
        {
          Meteor.user() ? Meteor.user().profile.name : 'Click login'
        }
        </h1>
      </div>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    user: Meteor.user(),
  }
})(Info);

