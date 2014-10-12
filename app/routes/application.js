import Ember from 'ember';

import settings from 'risk-roll/json/settings';

export default Ember.Route.extend({
  model: function () {
    return settings;
  }
});