import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {

            var post = this.get('model');
            post.deleteRecord();
            post.save();
            
        }
    },

    didInsertPost: function() {
        console.log('inserted a new post');
        this.$().hide().show('slow');

    }.on('didInsertElement'),

    didRemovePost: function() {
        var that = this;
        this.$().hide('slow', function() {
            that.remove();
        });
        console.log('element removed', this.$());
    }.on('willDestroyElement')
});
