import Ember from 'ember';

export default Ember.ArrayController.extend({

    sortProperties: ['id'],
    sortAscending: false,
    wordCount: 140,

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
});
