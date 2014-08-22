import Ember from 'ember';

export default Ember.ObjectController.extend({
    
    time: function() {
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property(),

    actions: {
        delete: function() {
            var post = this.get('model');
            post.deleteRecord();
            post.save();
        }
    }
});
