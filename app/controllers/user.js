import Ember from 'ember';

export default Ember.ObjectController.extend({
   
    authenticatedUser: function() {
        return this.get('session.user');
    }.property(),

    authenticatedUserName: function() {
        return this.get('session.user.name');
    }.property()
});
