import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        error: function(reason) {
            console.log('reason: ', reason);
            this.transitionTo('create-account');
        }
    }
});