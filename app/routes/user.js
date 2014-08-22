import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        // debugger;
        var self = this;
        // var u = this.store.find('user', params.user_id);
        // console.log('u: ', u);
        return this.store.find('user', params.user_id).then( null, function() {
            self.transitionTo('create-account');
        });
    }
});