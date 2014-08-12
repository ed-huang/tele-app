import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.Object.create({
			id: 1,
			name: 'Edward'
		});
	}
});
