import Ember from 'ember';

export default Ember.ArrayController.extend({
    maxLength: 140,
    post: '',
    sortProperties: ['timestamp'],
    sortAscending: false,

    actions: {
        postTweet: function() {
            
            var self = this;
            var store = this.store;
            var time = new Date();

            if (this.get('post') !== '') {
                
                var data = {
                    author: this.get('session.user'), 
                    text: this.get('post'),
                    timestamp: time
                };

                var post = store.createRecord('post', data);

                post.save().then(function() {
                    self.set('post', '');
                });   
            }
        }
    },

    wordCount: function() {
        return  this.get('maxLength') - this.get('post').length;
    }.property('post', 'maxLength')
    // ,

    
});
