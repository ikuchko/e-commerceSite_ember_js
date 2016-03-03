import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('junks', {path: '/junks/:category_name'});
  this.route('basket');
});

export default Router;
