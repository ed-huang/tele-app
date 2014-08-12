import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log('user/following');
		return this.store.find('user');
	}
});
