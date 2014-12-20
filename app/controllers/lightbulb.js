// global io
import Ember from 'ember';

export default Ember.ArrayController.extend({
    classNames: ['lightbulb'],
    msg: '',
    actions: {
        sendMessage: function() {
            this.pushObject(this.get('msg'));
            this.set('msg', '');
        }
    }
});
