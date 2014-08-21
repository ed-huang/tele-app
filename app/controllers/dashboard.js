import Ember from 'ember';

export default Ember.ArrayController.extend({

    needs: 'application',
    authenticatedUser: Ember.computed.alias('controllers.application.authenticatedUser'),
    isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

    actions: {
        
    }

});
