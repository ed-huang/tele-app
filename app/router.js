import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TeleAppENV.locationType
});

Router.map(function() {
  	this.resource('create-account', {path: '/account'}, function() {
		this.route('login');
	  	this.route('confirmation');
	  	this.route('reset');	
  	});
	this.resource('user', {path: '/users/:name'}, function() {
		this.route('following');
  		this.route('followers');	
	});
});

export default Router;
