import Ember from 'ember';

export default Ember.Controller.extend({
    
//Set Dependencies for Login 
    needs: 'application',
    authenticatedUser: Ember.computed.alias('controllers.application.authenticatedUser'),
    isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

    actions: {
        login: function() {
            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;

//Check to see if form name and password within the DB
            if ( username && password && store.hasRecordForId('user', username)) {

                store.find('user', username).then(function(user) {

                        if (user.get('password') === password) {
                            self.set('authenticatedUser', store.find('user', username));
                            self.set('isLoggedIn', true);
                            self.transitionToRoute('dashboard');
                        }
                });
            } else {
                console.log('no username in database');
            }
        }
    }
});
