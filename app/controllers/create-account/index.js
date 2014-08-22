import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        signUp: function() {
            var username = this.get('username');
            var name = this.get('name');
            var password = this.get('password');
            var store = this.store;
            var self = this;


            if (username && name && password && !store.hasRecordForId('user', username)) {
                
                var user = store.createRecord('user', {
                    id: username,
                    name: name
                });

                this.set('authenticatedUser', user);
                this.set('isLoggedIn', true);

                this.get('session').set('user', user);

                user.save();

                self.transitionToRoute('dashboard');

            } else {
                console.log('username already in database');
            }
        }
    }
});
