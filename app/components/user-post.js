import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {
            console.log('component delete');
            var post = this.get('model');
            post.deleteRecord();
            post.save();
            // this.sendAction('deleteRecord', this.get('model'));
        }
    },
    
    follow: false,
    
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
