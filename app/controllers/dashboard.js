import Ember from 'ember';
/* global $ */

export default Ember.ArrayController.extend({

    sortProperties: ['timestamp'],
    sortAscending: false,
    maxLength: 140,
    post: '',

//Computed Property for Number of Letters Left
    wordCount: function() {
        return  this.get('maxLength') - this.get('post').length;
    }.property('post', 'maxLength'),

    actions: {
        logOut: function() {
            console.log('caling logOut');
            var that = this;
            // this.store.unloadAll('user');
            // this.store.unloadAll('post');
            // App.reset();
            $.get('/api/logout', function() {
            //on success transition to the homepage
                that.transitionToRoute('create-account');
            });
            
        },

        postTweet: function() {

//Check to see if Post is empty before allowing user to post tweet
            var time = new Date();
            if (this.get('post') !== '') {
                var post = this.store.createRecord('post', {
                    author: this.get('session.user'), 
                    text: this.get('post'),
                    timestamp: time
                });

                post.save();
                this.set('post', '');
            }
        }
    }
});
