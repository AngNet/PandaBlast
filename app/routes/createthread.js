<<<<<<< HEAD
/* eslint-disable no-console, no-unused-vars */
import Route from '@ember/routing/route';
import $ from "jquery";

export default Route.extend({

  actions: {
    addThread() {
      var title = $("#threadtitle").val();
      console.log("my content is : " + title);

      var desc = $("#threaddescription").val();
      console.log("my content is : " + desc);

      //adding threads
      dpd.threads.post({
        userId: "ehassah",
        threadTitle: title,
        threadTimestamp: new Date()
      }, function(result, error) {
        // add code to go to index page
      });
    }
  }

=======
import Route from '@ember/routing/route';

export default Route.extend({
>>>>>>> 84f6497c9b553f4732cd5b6f7114fdeb8599bfa0
});
