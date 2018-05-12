/* eslint-disable no-console, no-unused-vars */
import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { all } from 'rsvp';

export default Route.extend({
  model() {
    //get the id from the url
    var topicId = this.paramsFor('topic').id;

    //return json response, filtered by given column and value
    var myFetch = function(url,filName,filValue){
      return fetch(url).then(function(response) {
        return response.json();
      }).then(function(rawdata){
        return rawdata.filter(function(item){
          return item[filName]==filValue;
        });
      })
    }

    //return filtered posts, filtered threads, and all users, respectively
    var posts = myFetch('http://localhost:2403/posts','threadId',topicId);
    var thread = myFetch('http://localhost:2403/threads','id',topicId);
    var users = fetch('http://localhost:2403/users').then(function(response){
      return response.json();
    });

    //return all posts in the topic, plus the username for each post
    var postUsers = posts.then(function(response){
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

    //return the title of the topic
    var topicTitle = thread.then(function(response){
      for (let i = 0; i < response.length; i++){
        if (response[i]['id'] == topicId){
          return response[i]['threadTitle'];
        }
      }
    })

    //hash of promises to pass to template
    let promises = {
      posts: postUsers,
      title: topicTitle
    }

    return Ember.RSVP.hash(promises);
  }
});
