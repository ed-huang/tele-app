import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        console.log("is this working!!!!!");
        return this.store.find('user');
    }
    
});
