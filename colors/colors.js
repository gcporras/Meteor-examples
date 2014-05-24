Colors = new Meteor.Collection("colors");

if (Meteor.isClient) {

  Template.color_list.colors = function() {
    return Colors.find({}, {sort: {name: 1}});
  };
}

if (Meteor.isServer){
  Meteor.startup(function () {
    if (Colors.find().count() === 0){
      var names = [
        "red", "blue", "green"
      ];

      for (var i =0; i < names.length; names++) {
        Colors.insert({name: names[i]});
      }
    }
  });
}
