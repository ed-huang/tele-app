import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['tele-btn', 'btn', 'btn-default'],
    actions: {
        followUser: function() {
            this.sendAction('follow-user');
        },
    }
});

