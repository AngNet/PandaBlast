import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('login');
  this.route('register');
  this.route('account');
  this.route('threadlist');
  this.route('createthread');
  this.route('topic');
=======
  this.route('pandabb', function(){
    this.route('pandabb', {path:  ':pandabb_id'})
  });
  this.route('users');
  this.route('authenticated');
  this.route('login');
  this.route('register');
>>>>>>> logins
});

export default Router;
