import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        yesRepost: function() {
            this.sendAction('yesRepost');
        },

        noRepost: function() {
            this.sendAction('noRepost');
        }
    }
});
