import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login: function() {
            var username = this.get('username');
            var password = this.get('password');
            var store = this.store;
            var self = this;

            if(store.hasRecordForId('user', username)) {
                self.transitionTo('/users/'+username);
            } else {
                console.log('no username in database');
            }
        }
    }
});
