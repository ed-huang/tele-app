import Ember from 'ember';

export default Ember.TextArea.extend({
    keyUp: function(evt) {
        this.sendAction();
    }
});
