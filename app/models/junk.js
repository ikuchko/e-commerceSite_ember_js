import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  price: DS.attr()
});
