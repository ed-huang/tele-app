import DS from 'ember-data';

var User = DS.Model.extend({
    name: DS.attr('string'),
    picture: DS.attr('string'),
    posts: DS.hasMany('post', {async: true}),
    followers: DS.hasMany('user'),
    following: DS.hasMany('user')
});

User.reopenClass({
    FIXTURES: [
    { 
        id: 'cristianstrat', 
        name: 'Christian Strat',
        picture: '/assets/images/cristian-strat.png',
        followers: ['johnmaeda', 'clarkewolfe'],
        follwing: ['fastcompany', 'clarkewolfe']
    },
    { 
        id: 'johnmaeda', 
        name: 'John Maeda',
        picture: '/assets/images/cristian-strat.png',
        followers: ['johnmaeda', 'clarkewolfe'],
        follwing: ['fastcompany', 'clarkewolfe']
    },
    { 
        id: 'clarkewolfe', 
        name: 'Clarke Wolfe',
        picture: '/assets/images/cristian-strat.png',
        followers: ['johnmaeda', 'clarkewolfe'],
        follwing: ['fastcompany', 'clarkewolfe']
    },
    { 
        id: 'fastcompany', 
        name: 'Fast Company',
        picture: '/assets/images/cristian-strat.png',
        followers: ['johnmaeda', 'clarkewolfe'],
        follwing: ['fastcompany', 'clarkewolfe']
    },
    { 
        id: 'fastcompany', 
        name: 'Fast Company',
        picture: '/assets/images/cristian-strat.png',
        followers: ['johnmaeda', 'clarkewolfe'],
        follwing: ['fastcompany', 'clarkewolfe']
    }
    ]
});

export default User;