import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        reset: function() {

            var username = this.get('username');
            var email = this.get('email');
            var store = this.store;
            var self = this;
            
/*
//TODO: Include popups with incorrect user name etc... 
*/
            
//Check to see if form name and password within the DB
            if (username && email) {
//FIND generates a GET
                console.log('getting email: ');

                store.find('user', { username: username, email: email, operation: 'reset' } ).then(function() {
                    self.transitionToRoute('create-account.confirmation');
                });
            } else {
                console.log('no username in database');
            }
        }
    }
});
