import DS from 'ember-data';

var Post = DS.Model.extend({
	post: DS.attr('string'),
	author: DS.belongsTo('user', {async: true})
});

Post.reopenClass({
	FIXTURES: [
	{ 
		id: '1',
  		author: 'cristianstrat', 
    	post: 'Great teams constantly learn and re-learn how to move from the ego of *I* to the ego of *WE*.'
	},
	{ 
		id: '2',
  		author: 'clarkewolfe', 
    	post: 'Listen, I don\'t want to brag about my awesome #gaming skills but someone made it into an @IGN article today...'
	},
	{ 
		id: '3',
  		author: 'fastcompany', 
    	post: 'THIS APP IS LIKE A REMOTE CONTROL FOR YOUR CREDIT CARDS'
	},
	{ 
		id: '4',
  		author: 'fastcompany', 
    	post: 'Leica is celebrating its 100th birthday by launching an entirely new camera system. Born out of a design partnership with Audi, the unibody Leica T is an APS-C-sensored minimalistic masterpiece.'
	}
	]
});

export default Post;