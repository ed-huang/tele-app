import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signUp: function() {
            var username = this.get('username');
            var name = this.get('name');
            var password = this.get('password');
            var store = this.store;
            var self = this;

            if(!store.hasRecordForId('user', username)) {
                store.createRecord('user', {
                    id: username,
                    name: name
                }).save();
                self.transitionToRoute('user');
            } else {
                console.log('username already in database');
            }
        }
    }
});
