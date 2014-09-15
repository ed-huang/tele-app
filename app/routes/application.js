import Ember from 'ember';

export default Ember.Route.extend({
	// model: function() {
	// 	// return this.store.find('user');
	// }

    // You should of course also check if any network error occurs below.

    beforeModel: function() {
        var route = this;

        var promise = this.store.find('user', { operation: 'authenticating', isAuthenticated: true } );

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
