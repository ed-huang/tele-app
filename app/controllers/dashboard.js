import Ember from 'ember';

export default Ember.ArrayController.extend({

    sortProperties: ['id'],
    sortAscending: false,
    maxLength: 140,
    post: '',

    wordCount: function() {
        return  this.get('maxLength') - this.get('post').length;
    }.property('post', 'maxLength'),

    authenticatedUser: function() {
        return this.get('session.user');
    }.property(),

    name: function() {
        return this.get('session.user.name');
    }.property(),

    actions: {
        
        getCount: function(event) {
            var maxLength = 140;
            var textLength = this.get('post').length;
            this.set('wordCount', (maxLength - textLength));
        },

        postTweet: function() {
            if (this.get('post') !== '') {
                var post = this.store.createRecord('post', {
                    author: this.get('authenticatedUser'), 
                    text: this.get('post'),
                    timestamp: moment()
                });

                post.save();
                this.set('post', '');
                this.set('wordCount', 140);
            }
            
        }
    }
});
