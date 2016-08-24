import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    houseCommittees() {
      var params = {
        committees: "house",
      };
      this.sendAction("committees", params);
    },
    senateCommittees() {
      var params = {
        committees: "senate",
      };
      this.sendAction("committees", params);
    },
    jointCommittees() {
      var params = {
        committees: "joint",
      };
      this.sendAction("committees", params);
    }

  }
});
