import Ember from 'ember';

export default Ember.Component.extend({
    scheduleScrollIntoView: function() {
    // Only run once per tick, once rendering has completed;
    // avoid flood of scrolls when many updates happen at once
        Ember.run.scheduleOnce("afterRender", this, "scrollIntoView");
    }.observes("update-when.@each"),

    scrollIntoView: function() {
        this.$().scrollTop(this.$().prop("scrollHeight"));
    }
});
