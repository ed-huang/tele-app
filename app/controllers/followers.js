import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    addArrayObserver: {
        willChange: function() {
            console.log('Array changed');

        },
        didChange: function() {
            console.log('did change');
        }
    }
});
