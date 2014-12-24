/* global $ */
import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        login: function() {

            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;
            
            if (username && password) {

                console.log('logging in: ');

                password = $.md5(password + username);

                store.find('user', { username: username, password: password, operation: 'login' } ).then(function(users) {
                    
                    self.set('session.user', users.get('firstObject'));
                    self.transitionToRoute('dashboard');

                });
            } else {
                console.log('no username in database');
            }
        },
        facebookLogin: function() {
            var store = this.store;
            var self = this;
            console.log('facebook');

            $.ajax({
                type: "GET",
                url: '/api/users/auth/facebook',
                
                success: function (data) {
                    // self.set('isFollowed', true);
                    // console.log('data: ', data);
                    // console.log('follow!');
                    // self.set('session.user', users.get('firstObject'));
                    // self.transitionToRoute('dashboard');
                },
                dataType: 'json'
            });

            // store.find('user', { operation: 'facebookLogin' }).then(function(users) {
            //     self.set('session.user', users.get('firstObject'));
            //     self.transitionToRoute('dashboard');
            // });
        }

    }
});
