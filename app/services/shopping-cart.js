import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item) {
    var total = parseInt(item.get('price')) + parseInt(this.get('total'));
    console.log(item.get('price'));
    this.set('total', total);
    this.get('items').pushObject(item);
  },
});
