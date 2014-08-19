import DS from 'ember-data';

var User = DS.Model.extend({
    name: DS.attr('string'),
    password: DS.attr('string'),
    picture: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [
    { 
        id: 'cristianstrat', 
        name: 'Christian Strat',
        picture: '/assets/images/cristian-strat.png'
    },
    { 
        id: 'johnmaeda', 
        name: 'John Maeda',
        picture: '/assets/images/cristian-strat.png'
    },
    { 
        id: 'clarkewolfe', 
        name: 'Clarke Wolfe',
        picture: '/assets/images/cristian-strat.png'
    },
    { 
        id: 'fastcompany', 
        name: 'Fast Company',
        picture: '/assets/images/cristian-strat.png'
    },
    { 
        id: 'fastcompany', 
        name: 'Fast Company',
        picture: '/assets/images/cristian-strat.png'
    }
    ]
});

export default User;