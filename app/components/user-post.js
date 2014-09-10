import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {
            var post = this.get('model');
            var that = this.$().clone();
            this.$().prev().before(that);
            that.hide('slow', function() {
                that.remove();
            });
            
            post.deleteRecord();
            post.save();
            
        }
    },
    
    insertPost: function() {
        this.$().hide().show('slow');
        console.log('didInsertElement called');
    }.on('didInsertElement'),

    deletePost: function() {
        console.log('this function is called even when didInsertElement event is fired.');
    }.on('willDestroyElement')
});
