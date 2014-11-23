import DS from 'ember-data';

var User = DS.Model.extend({
    name: DS.attr('string'),
    password: DS.attr('string'),
    picture: DS.attr('string'),
    isFollowing: DS.attr('boolean', {defaultValue: false}),
    isFollowed: DS.attr('boolean') //look it up.
});

export default User;