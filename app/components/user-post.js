import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {
            var post = this.get('model');
            post.deleteRecord();
            post.save();
            
        }
    },
    
    insertPost: function() {
        this.$().hide().show('slow');
        console.log('didInsertElement called');
    }.on('didInsertElement'),

    deletePost: function() {
        var that = this.$().clone();
        this.$().prev().before(that);
        that.hide('slow', function() {
            that.remove();
        });
    }.on('willDestroyElement')
});
