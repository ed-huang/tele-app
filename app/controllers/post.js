import Ember from 'ember';

export default Ember.ObjectController.extend({

    authenticatedUser: function() {
        return this.get('session.user');
    }.property(),

    currentUser: function() {
       return this.get('author.id') === this.get('session.user.id')
    }.property(),

    time: function() {
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property(),

    actions: {
        delete: function() {
            var post = this.get('model');
            post.deleteRecord();
            post.save();
        }
    }
});
