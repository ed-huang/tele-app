import Ember from 'ember';

export default Ember.ObjectController.extend({
    
    time: function() {
        console.log('time1: ', this.get('timestamp'));
        console.log('now: ', moment().format());
        console.log(moment(this.get('timestamp')).fromNow());
        var time = moment(this.get('timestamp')).fromNow();
        return time;
    }.property(),

    actions: {
        delete: function() {
            console.log('delete');
        }
    }
});
