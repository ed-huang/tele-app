import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log('Login User Model');
		return this.store.find('user');
	},

	renderTemplate: function() {
		this.render('/index');
	}
});
