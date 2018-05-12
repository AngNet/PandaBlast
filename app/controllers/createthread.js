import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    postThread: function() {
      var threadTitle = this.get('threadtitle');
      var uid = dpd.users.me(function(me) {
        return me;
      })
      //var uid = this.get('userId');
      var threadTimestamp = new Date().getTime();
      var threadDescription = this.get('threadDescription');
      alert('Thread was added.');

      dpd.threads.post({
        "threadTitle": threadTitle,
        "userId": uid,
        "threadTimestamp": threadTimestamp,
        "threadDescription": threadDescription
      }), function(result, err) {
        if (err) return console.log(err);
        console.log(result, result.id);
      }
    }
  }
});
