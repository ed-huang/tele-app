import Ember from 'ember';

export default Ember.ObjectController.extend({
    // needs: 'application',
    // authenticatedUser: Ember.computed.alias('controllers.application.authenticatedUser'),
    // isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn')
    authenticatedUser: function() {
        return this.get('session.user');
    }.property(),

    name: function() {
        return this.get('session.user.name');
    }.property()
});
