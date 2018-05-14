import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValications, {
  showErrors: false,
  session: Ember.inject.service(),
  validations: {
    userName: {
      presense: true
    },
    password: {
      presense: true,
      length: {minimum: 6}
    }
  },
  actions: {
    login() {
      let {userName, password} = this.getProperties('userName', 'password');
      this.get("session").login(userName, password).then(()=>{
        this.transitionTOPreviousRoute()
      }).catch((reason)=>{
        this.set("showError: ", true)
      })
    }
  },

  transitionTOPreviousRoute() {
    var previousTransition = this.get('previousTransition');
    if (previousTransition) {
      this.set('previousTransition', null);
      previousTransition.retry();
    } else {
      //Default back to homepage
      this.transitionToRoute('index');
    }
  }

})
