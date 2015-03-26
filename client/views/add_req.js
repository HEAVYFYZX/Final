Template.tAddRequirements.events({
    'submit form': function(evt) {
        evt.preventDefault();
        var firstReq = evt.target.firstReq.value;
        Requirements.insert({
            firstReq: firstReq
        });

        evt.target.firstReq.value = '';

    },
    'click .delete': function (evt) {
  	evt.preventDefault();
    Requirements.remove(this._id);
  }
});

