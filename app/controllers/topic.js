/* eslint-disable no-console, no-unused-vars */
import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import $ from "jquery";

export default Controller.extend({
  queryParams: ['id'],
  id: null,

  actions: {
    saveComment() {
      $("#postOnThread").on("click", function() {
        var myContent = $("#myContent").val();
        console.log("my content is : " + myContent);

        var topicId = window.location.href.split("id=");
        console.log(topicId[1]);

        //addind the posts
        dpd.posts.post({
          userId: "ehassah",
          threadId: topicId[1],
          postContent: myContent,
          postTimestamp: new Date()
        }, function(result, error) {
          // Do something
          var myContent = $("#myContent").val("");
          console.log("this is post");
        });

      });
    },
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
