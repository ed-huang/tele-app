import Ember from 'ember';

export default Ember.Route.extend({

    // You should of course also check if any network error occurs below.

    actions: {
        logOut: function() {
            console.log('caling logOut');
            var self = this;

            this.store.find('user', { operation: 'logout' }).then(function() {
                console.log('logout promise returned');
                self.store.unloadAll('post');
                self.store.unloadAll('user');
                self.session.set('user', null);
                self.transitionTo('create-account');
            });
            // $.get('/api/users/logout', function() {
            //on success transition to the homepage
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
