import Ember from 'ember';

var User = Ember.Object.extend({
  title: null,
  rolls: [],
  selected: 1
});

export default User;