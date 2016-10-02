/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    firebase:{
      apiKey: "AIzaSyAnF8mq6Qyxsh9N6s-TdOUH9EpwOxr8jKw",
      authDomain: "hidalgo-f65ba.firebaseapp.com",
      databaseURL: "https://hidalgo-f65ba.firebaseio.com",
      storageBucket: "hidalgo-f65ba.appspot.com",
      messagingSenderId: "821336519111"
  },
  torii:{
    sessionServiceName: 'session'
  },
    modulePrefix: 'hidalgo',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
