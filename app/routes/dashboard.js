import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {

        var loggedIn = this.controllerFor('application').get('isLoggedIn');
        console.log(loggedIn, "loogin");
        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        return this.store.find('post');
    }
});
