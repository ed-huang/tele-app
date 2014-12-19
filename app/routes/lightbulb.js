/* global io */
import Ember from 'ember';

Ember.MessagesArray = Ember.ArrayProxy.extend({
  init: function() {
    var messages = Ember.A();
    this.set("content", messages);

    this.socket.on("message", function(data) {
      messages.pushObject(data.message);
    });

    this._super();
  },
  replaceContent: function(ids, amt, object) {
   this.socket.emit("send", { message: object });
  }
});

export default Ember.Route.extend({
    model: function() {
        return Ember.MessagesArray.create({ socket: io.connect(document.URL) });
    }
});
