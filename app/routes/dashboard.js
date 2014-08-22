import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {

        // var loggedIn = this.controllerFor('application').get('isLoggedIn');
        var loggedIn = this.get('session.isAuthenticated');
        this.get('session.isAuthenticated');
        console.log(loggedIn, "loogin");
        
        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        console.log('dashboard model');

        return this.store.find('post');
    }
});
