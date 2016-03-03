import Ember from 'ember';

export default Ember.Component.extend({
  isTitleShowed: false,
  mouseEnter() {
    this.set('isTitleShowed', true);
  },

  mouseLeave() {
    this.set('isTitleShowed', false);
  }
});
