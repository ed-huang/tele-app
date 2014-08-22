import Ember from 'ember';

export default Ember.Route.extend({
    

    model: function() {
        // console.log('userId: ', this.get('user'), user);
        var post = this.store.find('post');
        var curUserId = this.modelFor('user').get('id');
        console.log('model: ', curUserId);
        //How do i filter the posts withe the curUser ID???
        console.log('post author: ', post.get('author   '));

        return post;
    }
});
