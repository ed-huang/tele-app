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
            var id = 1;
            var time = new Date();
            if (this.get('post') !== '') {
                var post = this.store.createRecord('post', {
                    author: this.get('session.user'), 
                    text: this.get('post'),
                    timestamp: time
                });

                post.save();
                this.set('post', '');
                
                var updatedPosts = this.store.all('post');
                this.set('model', updatedPosts);
                
            }
        }
    }
});
