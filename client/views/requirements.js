Template.tAddRequirements.helpers({
	list: function() {
    	return Requirements.find();
    }
});
Template.tAddRequirements.events({
    'click .delete': function() {
        Requirements.remove(this._id);
    },
    'click .submit': function() {
        Requirements.add(this._id);
    }
});

