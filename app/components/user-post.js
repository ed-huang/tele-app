import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {
            var that = this.$().clone();
            this.$().prev().before(that);
            that.hide('slow', function() {
                that.remove();
            });
            this.sendAction();
        }
    },
    follow: function() {
        this.sendAction();
    },
    insertPost: function() {
        this.$().hide().show('slow');
        console.log('didInsertElement called');
    }.on('didInsertElement')
});
