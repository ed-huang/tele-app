import Ember from 'ember';

export default Ember.Controller.extend({

    needs: 'application',
    id: Ember.computed.alias('controllers.application.id'),
    name: Ember.computed.alias('controllers.application.name'),
    picture: Ember.computed.alias('controllers.application.picture'),
    isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
    

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
                
                this.set('isLoggedIn', true);
                this.set('id', username);
                this.set('name', name);

                self.transitionToRoute('dashboard');

            } else {
                console.log('username already in database');
            }
        }
    }
});
