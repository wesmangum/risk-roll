import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setDie: function(value) {
      this.set('selected', value);
    },
    rollDice: function() {
      var sel = this.get('selected');
      var num = [];
      for (var i = 1; i <= sel; i++) {
        num.push((Math.round(Math.random() * 5)) + 1);
      }
      this.set('rolls', num);
      console.log(this.get('rolls'));
    }
  },
  dice: [1, 2, 3],
  rolls: [],
  selected: 1
});