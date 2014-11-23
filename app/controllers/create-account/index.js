/* global $ */
import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        signUp: function() {

            var username = this.get('username');
            var name = this.get('name');
            var password = this.get('password');
            var store = this.store;
            
            password = $.md5(password + username);

            if (username && name && password) {
                var that = this;
                var user = store.createRecord('user', {
                    id: username,
                    name: name,
                    password: password
                });

                user.save().then(function() {
                    that.set('session.user', user);
                    that.transitionToRoute('dashboard');    
                }); //POST REQUEST TO SERVER
                

            } else {
                console.log('username already in database');
            }
        }
    }
});