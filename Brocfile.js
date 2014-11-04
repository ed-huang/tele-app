/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/facebook/facebookAPI.js');
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/moment/moment.js');
app.import('vendor/jquery-md5/jquery.md5.js');

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

module.exports = app.toTree();
