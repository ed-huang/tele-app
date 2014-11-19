import Ember from 'ember';

export default Ember.Component.extend({

    insertPost: function() {
        this.$().hide().show('slow');
        console.log('didInsertElement called');
    }.on('didInsertElement'),

    deletePost: function() {
        console.log('jquery deletePost inside of component');
        var that = this.$().clone();
        this.$().prev().before(that);
        that.hide('slow', function() {
            that.remove();
        });
    }.on('willDestroyElement')
});
