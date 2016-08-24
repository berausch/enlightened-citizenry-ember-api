import Ember from 'ember';

export default Ember.Component.extend({
  isZipFormShowing: false,
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
      this.set('isZipFormShowing', false);
    },
    showZipForm() {
      this.set('isZipFormShowing', true);
    },
    hideZipForm() {
      this.set('isZipFormShowing', false);
    }
  }
});
