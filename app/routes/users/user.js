import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log("users/user mode");
		return this.store.find('user');
	}
});
