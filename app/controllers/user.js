import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logOut: function() {
            console.log('caling logOut');
            var that = this;
            // this.store.unloadAll('user');
            // this.store.unloadAll('post');
            // App.reset();
            $.get('/api/logout', function() {
            //on success transition to the homepage
                that.transitionToRoute('create-account');
            });
            
        }
    }
});
