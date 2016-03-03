import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  isTitleShowed: false,
  isDescriptionShowed: false,

  mouseEnter() {
    this.set('isTitleShowed', true);
  },

  mouseLeave() {
    this.set('isTitleShowed', false);
  },

  actions: {
    openDescription() {
      this.set('isDescriptionShowed', true);
    },

    closePanel() {
      this.set('isDescriptionShowed', false);
    },

    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
  }
});
