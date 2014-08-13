import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        delete: function() {
            console.log('delete');
        }
    }
});
