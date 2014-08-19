import Ember from 'ember';

export default Ember.Controller.extend({
    
//Set Dependencies for Login 
    needs: 'application',
    authenticatedUser: Ember.computed.alias('controllers.application.authenticatedUser'),

    actions: {
        login: function() {
            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;

//Check to see if form name and password within the DB
            if (store.hasRecordForId('user', username)) {
                
                var valid = store.find('user', username).then(function(user) {
                    return user.get('password') === password;
                });

                if (valid) {
                    this.set('authenticatedUser', store.find('user', username));
                    self.transitionToRoute('dashboard');
                }

            } else {
                console.log('no username in database');
            }
        }
    }
});
