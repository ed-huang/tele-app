import Ember from 'ember';

export default Ember.ArrayController.extend({
    maxLength: 140,
    text: '',
    sortProperties: ['timestamp'],
    sortAscending: false,

    actions: {
        postTweet: function (repost) {
            var data = {};

            if (repost !== undefined) {
                data = {
                    author: this.get('session.user'), 
                    original_author: repost.get('author'),
                    text: repost.get('text'),
                    timestamp: new Date()
                };
                this.send('postNewRecord', data);

            } else {
                if (this.get('text') !== '') {
                    data = {
                        author: this.get('session.user'), 
                        original_author: '',
                        text: this.get('text'),
                        timestamp: new Date()
                    };
                    this.send('postNewRecord', data);    
                }
            }
        }
    },

    postNewRecord: function (data) {
        var self = this;
        var store = this.store;

        var post = store.createRecord('post', data);

        post.save().then(function() {
            self.set('text', '');
        });
    },

    wordCount: function() {
        return  this.get('maxLength') - this.get('text').length;
    }.property('post', 'maxLength')


    
});
