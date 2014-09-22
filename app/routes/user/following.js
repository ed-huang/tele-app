import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {

        var curUserId = this.modelFor('user').get('id');
        
		return this.store.find('user', params.user_id + '/following');
	}
});
