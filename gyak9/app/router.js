import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('footballmatches', function() {
    this.route('list');
    this.route('new');
    // /errors/:id
    this.route('view', {path:'/:footballmatch_id/'});
    // /errors/edit/:id
    this.route('edit', {path:'/edit/:footballmatch_id'});
    this.route('newevent', {path:'/:footballmatch_id/newevent'});
    //1
    this.route('listevents');
    this.route('editevent', {path: '/editevent/:event_id'});
    
  });
});

export default Router;
