import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var self = this;
        return this.store.find('user', params.user_id).then( null, function() {
            self.transitionTo('create-account');
        });
    }
});