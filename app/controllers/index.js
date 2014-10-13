import Ember from 'ember';
import Users from 'risk-roll/json/users';

export default Ember.Controller.extend({
  actions: {
    rollDice: function(user) {
      var sel = user.selected;
      var num = [];
      for (var i = 1; i <= sel; i++) {
        num.push((Math.round(Math.random() * 5)) + 1);
      }
      user.set('rolls', num);
      console.log(user.rolls);
    }
  },
  users: Users
});