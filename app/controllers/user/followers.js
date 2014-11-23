import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    needs: ['application', 'user'],
    isFollowed: Ember.computed.alias('controllers.user.isFollowed'),

    modelObserver: function() {
        console.log('Followers Controller requesting route to refresh...');

            if (this.get('isFollowed')) {
                this.get('session.user').set('isFollowing', true);
            } else {
                this.get('session.user').set('isFollowing', false);
            }

            /*
            ** Wondering if  better soution is to use a mutalbe array, and replace the one we got from store.find
            ** Write now we added an extra isFollowing property specifically for the logged in user
            ** this way inside the route we can store.filter for isFollowing or not.
            ** I don't know if this is the best solution or not. 
            */

    }.observes('controllers.user.isFollowed')
});
