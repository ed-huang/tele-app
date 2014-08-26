import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        signUp: function() {

            var username = this.get('username');
            var name = this.get('name');
            var password = this.get('password');
            var store = this.store;

/*
//TODO: Include popups with incorrect user name etc... 
*/

            if (username && name && password && !store.hasRecordForId('user', username)) {
                
                var user = store.createRecord('user', {
                    id: username,
                    name: name,
                    password: password
                });

                this.set('session.user', user);
                user.save();
                this.transitionToRoute('dashboard');

            } else {
                console.log('username already in database');
            }
        }
    }
});