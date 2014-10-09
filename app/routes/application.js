import Ember from 'ember';
/* global $ */

export default Ember.Route.extend({
	// model: function() {
	// 	// return this.store.find('user');
	// }

    // You should of course also check if any network error occurs below.

    actions: {
        logOut: function() {
            console.log('caling logOut');
            var that = this;
            // this.store.unloadAll('user');
            // this.store.unloadAll('post');
            // App.reset();
            $.get('/api/users/logout', function() {
            //on success transition to the homepage
                that.store.unloadAll('post');
                that.store.unloadAll('user');
                that.session.set('user', null);
                that.transitionTo('create-account');
            });
        }
    },

    beforeModel: function() {
        var route = this;

        var promise = this.store.find('user', { operation: 'authenticating' } );

        return promise.then(function(users) {
            console.log('Promise fulfilled.', users);
            if (users && users.get('length') > 0 ) {
                var user = users.get('firstObject');
                console.log('Users got firstObject: ', user);
                route.set('session.user', user);
            }
            return users;
        });
    }
});
