import DS from 'ember-data';

var Post = DS.Model.extend({
    author: DS.belongsTo('user', {async: false}),
    text: DS.attr('string'),
    timestamp: DS.attr('date')
});

export default Post;