import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
        var curUserId = this.modelFor('user').get('id');
        var loggedUser = this.controllerFor('application').get('session.user.id');
            
        if (loggedUser === curUserId) {
            return this.store.filter('user', { operation: 'following', curUser: curUserId }, function(user) {
                return user.get('isFollowed');
            });
        } else {
            return this.store.find('user', { operation: 'following', curUser: curUserId });
        }		
	}
});
