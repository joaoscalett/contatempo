import { Meteor } from 'meteor/meteor'
import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

const withUser = Component => props => {
  const ComponentWithTracker = withTracker(() => ({
    loggingIn: Meteor.loggingIn(),
    user: Meteor.user(),
    ...props,
  }))(Component)

  return <ComponentWithTracker />
}

export default withUser
