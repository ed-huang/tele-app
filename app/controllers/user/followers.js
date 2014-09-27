import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    needs: ['application', 'user'],

    isFollowerRoute: function() {
        return this.get('controllers.application.currentRouteName') === 'user.followers';
    }.property('controllers.application.currentRouteName'),

    user: Ember.computed.alias('controllers.user'),
    
    modelObserver: function() {
        Ember.Logger.log('Controller requesting route to refresh...');
        if (this.get('isFollowerRoute')) {
            this.send('invalidateModel');    
        }
        
    }.observes('controllers.user.isFollowed')
});
