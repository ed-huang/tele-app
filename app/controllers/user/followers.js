import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    needs: ['application', 'user'],

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
    }.observes('controllers.user.isFollowed')
});
