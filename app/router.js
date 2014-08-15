import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TeleAppENV.locationType
});

Router.map(function() {
    this.resource('create-account', {path: '/'}, function() {
    this.route('login');
      this.route('confirmation');
      this.route('reset');  
    });
  this.resource('user', {path: '/users/:user_id'}, function() {
    this.route('following');
      this.route('followers');  
  });
  this.route('dashboard');
});

export default Router;
