import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  queryParams: ['id'],
  id: null,

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
