import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['user'],
    isFollowed: Ember.computed.alias('controllers.user.isFollowed'),

    modelObserver: function() {
            if (this.get('isFollowed')) {
                this.get('model').pushObject(this.get('session.user'));
            } else {
                this.get('model').removeObject(this.get('session.user'));
            }
    }.observes('controllers.user.isFollowed')
});
