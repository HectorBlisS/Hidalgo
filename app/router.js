import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('details', {
      path: ':project_id'
    });
    this.route('new');

    this.route('edit', {
      path: ':project_id/edit'
    });
  });
  this.route('login');
  this.route('perfil');
});

export default Router;
