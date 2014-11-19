import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['application'],
    
    actions: {
        follow: function() {
            alert('follow unfollow');
        }
    }
});
