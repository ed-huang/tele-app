import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signUp: function() {
            var username = this.get('username');
            var name = this.get('name');
            var password = this.get('password');
            var store = this.store;


            if(!store.hasRecordForId('user', username)) {
                store.createRecord('user', {
                    id: 'dwerdo',
                    name: name,
                    password: password
                }).save();
            } else {
                console.log('username already in database');
            }
        }
    }
});
