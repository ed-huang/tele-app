import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    needs: ['application', 'user'],

    isFollowerRoute: function() {
        return this.get('controllers.application.currentRouteName') === 'user.followers';
    }.property('controllers.application.currentRouteName'),
    
    isFollowed: Ember.computed.alias('controllers.user.isFollowed'),

    modelObserver: function() {
        Ember.Logger.log('Controller requesting route to refresh...');
        // var change = this.get('isFollowed');
            var myArray = [];
            for (var i = 0; i < this.get('length'); i++) {
                myArray.pushObject(this.objectAtContent(i));
            }

            if (this.get('isFollowed')) {
                myArray.pushObject(this.get('session.user'));
            } else {
                myArray.removeObject(this.get('session.user'));
            }
            
            this.set('model', myArray);
        
            // this.send('invalidateModel'); 


            // console.log('observer is called: ', change);
            
        
    }.observes('controllers.user.isFollowed')
});
