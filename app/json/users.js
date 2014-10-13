import Ember from 'ember';
import User from 'risk-roll/models/user';

var users = [
  {
    id: 1,
    title: 'Attacker',
  },{
    id: 2,
    title: 'Defender',
  }
];

var arrayProxy = Ember.ArrayProxy.create({
  content: users
});

export default arrayProxy.map(function(user) {
  return User.create(user);
});