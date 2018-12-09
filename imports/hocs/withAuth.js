import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

function useRequireLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      navigate('/login');
    } else if (Meteor.userId()) {
      setIsAuthenticated(true);
    }
  });

  return isAuthenticated;
}

const withAuth = Component => (props) => {
  const isAuthenticated = useRequireLogin();

  return isAuthenticated ? <Component {...props} /> : 'Loading...';
}

export default withAuth;
