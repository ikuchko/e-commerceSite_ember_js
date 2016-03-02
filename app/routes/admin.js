import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newJunk = this.store.createRecord('junk', params);
      newJunk.save()
    }
  }
});
