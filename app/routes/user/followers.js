import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
        var curUserId = this.modelFor('user').get('id');

        return this.store.filter('user', { operation: 'followers', curUser: curUserId }, function (user) {
            return user.get('isFollowing') && (user.id !== curUserId);
        });
	}
    // , 

    // actions: {
    //     invalidateModel: function() {
    //         Ember.Logger.log('Route is now refreshing...');
    //         this.refresh();
    //     }
    // }
});
