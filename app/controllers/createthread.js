import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    postThread: function() {
      var threadTitle = this.get('threadtitle');
      var uid;
      var threadTimestamp = new Date().getTime();
      var threadDescription = this.get('threadDescription');
      dpd.users.me(function(user) {
        if (user)
          uid = user.username;
        if (uid == undefined)
          uid = 'anonymous';
        console.log(uid);

        dpd.threads.post({
            "threadTitle": threadTitle,
            "userId": uid,
            "threadTimestamp": threadTimestamp,
            "threadDescription": threadDescription
          }),
          function(result, err) {
            if (err) return console.log(err);
            console.log(result, result.id);
          }
      })
      alert("Thread added.");
    }
  }
});
