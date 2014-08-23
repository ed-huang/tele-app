import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'tele-app', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'tele-app');

import PostTextArea from './views/post-textarea';
Ember.Handlebars.helper('post-textarea', PostTextArea);

export default App;
