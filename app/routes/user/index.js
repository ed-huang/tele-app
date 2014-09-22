import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {

/**
* Get the model for the parent route. In this case it is user.
*/
        var curUserId = this.modelFor('user').get('id');
 

/**
* Here we will find all posts writtent by certain author. 
*/

        return this.store.find('post', { author: curUserId });
    }
});
