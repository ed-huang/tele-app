import Ember from 'ember';

export default Ember.ObjectController.extend({
    isCurrentUser: function() {
        return this.get('id') === this.get('session.user.id');
    }.property('id'),

    actions: {
        follow: function() {
            console.log('follow!');
        }
    }
});
