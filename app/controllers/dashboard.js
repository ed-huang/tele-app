import Ember from 'ember';

export default Ember.ArrayController.extend({

    sortProperties: ['id'],
    sortAscending: false,
    maxLength: 140,
    post: '',

//Computed Property for Number of Letters Left
    wordCount: function() {
        return  this.get('maxLength') - this.get('post').length;
    }.property('post', 'maxLength'),

    actions: {
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
