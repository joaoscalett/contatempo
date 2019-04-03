import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'
import { Accounts } from 'meteor/accounts-base'
import Records from '../imports/api/records'

const google = Meteor.settings.private.oAuth.google

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: google,
  },
)

Accounts.onCreateUser((options, user) => {
  const firstServiceKey = Object.keys(user.services)[0]
  const loginService = user.services[firstServiceKey]

  return {
    ...user,
    profile: {
      ...options.profile,
      email: loginService.email,
      picture: loginService.picture,
      settings: {},
    },
  }
})

Meteor.startup(() => {
  if (Records.find().count() === 0) {
    Records.insert({ _id: 'teste2', begin: new Date() })
  }
})
