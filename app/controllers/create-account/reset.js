import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        reset: function() {

            var username = this.get('username');
            var email = this.get('email');
            var store = this.store;
            var self = this;
                    
            if (username && email) {
                store.find('user', { username: username, email: email, operation: 'reset' } ).then(function() {
                    self.transitionToRoute('create-account.confirmation');
                });
            } else {
                console.log('no username in database');
            }
        }
    }
});
