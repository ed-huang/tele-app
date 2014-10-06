import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {

        var loggedIn = this.get('session.isAuthenticated');

        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        //return posts that current logged in user is following
        
        return this.store.find('post', { operation: 'dashboard' });
    }
});
