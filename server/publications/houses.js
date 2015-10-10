Meteor.publish("houses", function () {
    return Collections.Houses.find();
});
