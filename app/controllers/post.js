import Ember from 'ember';
/* global moment */
// No import for moment, it's a global called `moment`

export default Ember.ObjectController.extend({
    
    needs: ['application'],

    isUserRoute: function() {
        return this.get('controllers.application.currentRouteName') === 'user.index';
    }.property('controllers.application.currentRouteName'),
    
    isCurrentUser: function() {
        return this.get('author.id') === this.get('session.user.id');
    }.property('author.id'),

    time: function() {
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property()
});
