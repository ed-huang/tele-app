import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        login: function() {
            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;

//Check to see if form name and password within the DB
            if (username && password && store.hasRecordForId('user', username)) {

                store.find('user', username).then(function(user) {

                        if (user.get('password') === password) {

                            self.get('session').set('user', user);
                            self.transitionToRoute('dashboard');
                        }
                });
            } else {
                console.log('no username in database');
            }
        }
    }
});
