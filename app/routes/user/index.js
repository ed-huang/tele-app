import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {

/**
* Get the model for the parent route. In this case it is user.
*/
        var curUserId = this.modelFor('user').get('id');
 

/**
* Here we will find all posts written by a certain author. 
*/

        return this.store.filter('post', function(post) {
            return post.get('author').get('id') === curUserId;
        });
    }
});
