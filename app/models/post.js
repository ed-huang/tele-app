import DS from 'ember-data';

var Post = DS.Model.extend({
  author: DS.belongsTo('user'),
  text: DS.attr('string'),
  timeStamp: DS.attr('date')
});

Post.reopenClass({
  FIXTURES: [
  { 
    id: '1',
      author: 'cristianstrat', 
      text: 'Great teams constantly learn and re-learn how to move from the ego of *I* to the ego of *WE*.',
      timeStamp: '1407914948165'
  },
  {
    id: '2',
      author: 'clarkewolfe', 
      text: 'Listen, I don\'t want to brag about my awesome #gaming skills but someone made it into an @IGN article today...',
      timeStamp: '1407914948165'
  },
  { 
    id: '3',
      author: 'fastcompany', 
      text: 'THIS APP IS LIKE A REMOTE CONTROL FOR YOUR CREDIT CARDS',
      timeStamp: '1407914948165'
  },
  { 
    id: '4',
      author: 'fastcompany', 
      text: 'Leica is celebrating its 100th birthday by launching an entirely new camera system. Born out of a design partnership with Audi, the unibody Leica T is an APS-C-sensored minimalistic masterpiece.',
      timeStamp: '1407914948165'
  }
  ]
});

export default Post;