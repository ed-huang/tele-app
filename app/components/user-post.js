import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete: function() {

            var post = this.get('model');
            post.deleteRecord();
            post.save();
            
        }
    }
});
