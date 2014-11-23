import Ember from 'ember';
/* global $ */

export default Ember.ObjectController.extend({

    needs: ['application'],
    
    followUnfollow: function() {
        return this.get('isFollowed') ? 'Unfollow' : 'Follow';
    }.property('isFollowed'),

    isFollowingRoute: function() {
        return this.get('controllers.application.currentRouteName') === 'user.following';
    }.property('controllers.application.currentRouteName'),

    isCurrentUser: function() {
        return this.get('id') === this.get('session.user.id');
    }.property('id'),


    actions: {
        follow: function() {
            var self = this;

            if (!this.get('isFollowed')) {
                $.ajax({
                    type: "POST",
                    url: '/api/users/follow',
                    data: {
                        id: this.get('id')
                    },
                    success: function (data) {
                        self.set('isFollowed', true);
                        console.log('data: ', data);
                        console.log('follow!');
                    },
                    dataType: 'json'
                });    
            } else {
                $.ajax({
                    type: "POST",
                    url: '/api/users/unfollow',
                    data: {
                        id: this.get('id')
                    },
                    success: function (data) {
                        self.set('isFollowed', false);
                        console.log('data: ', data);
                        console.log('unfollow!');
                    },
                    dataType: 'json'
                });
            }
        }
    }
});
