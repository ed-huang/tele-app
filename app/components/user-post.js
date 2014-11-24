import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        repost: function() {
            console.log('repost called');
            this.set('repostConfirm', true);
        }
    },

    repostConfirm: false,

    insertPost: function() {
        this.$().hide().slideDown('slow');
        console.log('didInsertElement called');
    }.on('didInsertElement'),

    deletePost: function() {
        console.log('jquery deletePost inside of component');
        var that = this.$().clone();
        this.$().prev().before(that);
        that.slideUp('slow', function() {
            that.remove();
        });
    }.on('willDestroyElement')
});
