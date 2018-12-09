import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import Records from '../imports/api/records';

const google = Meteor.settings.private.oAuth.google;

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: google,
  }
);

Meteor.startup(() => {
  if (Records.find().count() === 0) {
    Records.insert({_id: "teste2", begin: new Date()});
  }
});
