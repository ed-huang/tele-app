import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        login: function() {

            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;
/*
//TODO: Include popups with incorrect user name etc... 
*/

//Check to see if form name and password within the DB
            if (username && password) {
//FIND generates a GET
                console.log('logging in: ');
                store.find('user', { username: username, password: password, operation: 'login' } ).then(function(users) {
                    
                    console.log('user: ', users);
                    self.set('session.user', users.get('firstObject'));
                    self.transitionToRoute('dashboard');

                });
            } else {
                console.log('no username in database');
            }
        }
    }
});
