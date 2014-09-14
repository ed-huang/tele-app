import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logOut: function() {
            console.log('logging out');
        }
    }
});
