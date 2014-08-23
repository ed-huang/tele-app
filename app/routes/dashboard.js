import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {

        var loggedIn = this.get('session.isAuthenticated');

//        FOR TESTING PURPORSE
        // var loggedIn = true;
        
        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        return this.store.find('post');
    }
});
