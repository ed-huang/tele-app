import Ember from 'ember';

export default Ember.Route.extend({
    

    model: function() {

        var post = this.store.find('post');
        var curUserId = this.modelFor('user').get('id');
        
        return this.store.filter('post', function(post) {
            return post.get('author').get('id') === curUserId;
        });
    }
});
