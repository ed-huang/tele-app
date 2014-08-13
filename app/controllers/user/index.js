import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'user/post',
  
  setupController: function(controller) {
    var posts = this.store.find('post');
    controller.set('mode', posts);
  }
});
