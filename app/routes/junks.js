import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.query('junk', {orderBy: 'category', equalTo: params.category_name});
  }
});
