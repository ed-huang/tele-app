import Ember from 'ember';

export default Ember.ArrayController.extend({

    sortProperties: ['timestamp'],
    sortAscending: false,
    maxLength: 140,
    post: '',

    wordCount: function() {
        return  this.get('maxLength') - this.get('post').length;
    }.property('post', 'maxLength'),

    actions: {
        postTweet: function() {
            
            var time = new Date();
            var that = this;
            var store = this.store;

            if (this.get('post') !== '') {
                var post = store.createRecord('post', {
                    author: this.get('session.user'), 
                    text: this.get('post'),
                    timestamp: time
                });

                post.save().then(function() {
                    that.set('post', '');

                    var updatedPosts = store.all('post');
                    that.set('model', updatedPosts);    
                });   
            }
        }
    }
});
