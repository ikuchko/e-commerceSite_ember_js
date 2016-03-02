import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params.category_name);
    return this.store.query('junk', {orderBy: 'category', equalTo: params.category_name});
  }
});
