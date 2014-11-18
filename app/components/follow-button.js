import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['tele-btn'],
    click: function() {
        this.sendAction();
    },
    
});

