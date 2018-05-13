/* eslint-disable no-console, no-unused-vars */
import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { all } from 'rsvp';

export default Route.extend({
  beforeModel(){
    this.replaceWith("index");
  },

  model() {
    var threads = fetch('http://localhost:2403/threads').then(function(response){
      return response.json();
    });
    var users = fetch('http://localhost:2403/users').then(function(response){
      return response.json();
    });

    var usernames = threads.then(function(response){
      var arr = []
      for (let i = 0; i < response.length; i++){
        arr.push(response[i]['userId']);
      }
      users.then(function(data){
        for (let n = 0; n < data.length; n++){
          for (let x = 0; x < arr.length; x++){
            if (arr[x] === data[n]['id']){
              set(response[x],'username',data[n]['username']);
            }
          }
        }
      });
      return response;
    });

    let promises = {
      topics: threads,
    }

    return Ember.RSVP.hash(promises);
  }
});
