import Ember from 'ember';

export default Ember.Component.extend({
    model: {
    function(committee){
      console.log(committee);
      var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id='+ committee.committee_id + '&apikey=268c6aac555640c6bb14cff3588709ba';
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
    }
  }
});
