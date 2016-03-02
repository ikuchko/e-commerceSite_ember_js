import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image')
      }
      this.set('title', '');
      this.set('description', '');
      this.set('image', '');
      this.sendAction('save', params);
    }
  }
});
