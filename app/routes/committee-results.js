import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber='+ params.committees + '&subcommittee=false&apikey=268c6aac555640c6bb14cff3588709ba';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
