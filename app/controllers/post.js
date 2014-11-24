import Ember from 'ember';
/* global moment */
// No import for moment, it's a global called `moment`

export default Ember.ObjectController.extend({
    
    needs: ['application'],

    repostConfirm: false,

    isUserIndexRoute: function() {
        return this.get('controllers.application.currentRouteName') === 'user.index';
    }.property('controllers.application.currentRouteName'),

    isCurrentUser: function() {
        return this.get('author.id') === this.get('session.user.id');
    }.property('author.id'),

    time: function() {
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property(),

    actions: {
        delete: function() {
            console.log('postcontroller delete');
            this.store.find('post', this.get('model').id).then(function (post) {
                post.deleteRecord();
                post.save();
            });
        },
        repost: function() {
            this.set('repostConfirm', true);
        }
    }
});
