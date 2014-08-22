export default {
  name: 'session',

  initialize: function(container, app) {

    // app.register('route', 'foo', 'service:foo');
    var Session = Ember.Object.extend({
        user: null,
        isAuthenticated: function() {
            return this.get('user') != null;
        }.property('user')
    });

    app.register('session:main', Session);

    app.inject('route', 'session', 'session:main');
    app.inject('controller', 'session', 'session:main');
  }
};
