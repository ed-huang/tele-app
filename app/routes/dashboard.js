import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel: function() {
        var loggedIn = this.get('session.isAuthenticated');

        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        var self = this;
        return this.store.filter('post', { operation: 'dashboard' }, function (post) {
            if (post.get('author').id === self.get('session.user.id')) {
                return true;
            } else {
                return post.get('author').get('isFollowed');    
            }
        });
    }
});
