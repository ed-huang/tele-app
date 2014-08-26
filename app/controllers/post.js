import Ember from 'ember';

export default Ember.ObjectController.extend({

    isCurrentUser: function() {
        return this.get('author.id') === this.get('session.user.id');
    }.property(),

    time: function() {
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property(),
});
