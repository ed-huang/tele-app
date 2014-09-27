import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {

        var curUserId = this.modelFor('user').get('id');

        return this.store.find('user', { operation: 'followers', curUser: curUserId });
	}, 
    actions: {
        invalidateModel: function() {
            Ember.Logger.log('Route is now refreshing...');
            this.refresh();
        }
    }
});
