/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/jquery/dist/jquery.js');
  //Carousel
  app.import('bower_components/OwlCarousel/owl-carousel/owl.carousel.css');
  app.import('bower_components/OwlCarousel/owl-carousel/owl.carousel.js');

  
  // app.import('bower_components/materialize/dist/css/materialize.css');
  // app.import('bower_components/materialize/dist/js/materialize.js');
  //Fuentes
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.woff2',{
  //   destDir: 'assets'
  // });
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.woff2');
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.woff');
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.woff');
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.ttf');
  // app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.ttf');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
