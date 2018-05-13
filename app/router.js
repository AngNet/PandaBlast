import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('account');
  this.route('threadlist');
  this.route('createthread');
<<<<<<< HEAD
  this.route('topic');
=======
>>>>>>> 84f6497c9b553f4732cd5b6f7114fdeb8599bfa0
});

export default Router;
