'use strict';

$(document).ready(function() {
  $('#about').hide();
});

$('#aboutNav').on('click', function() {
  $('#about').show().siblings().hide();
  print();
});

//about json
var profileArray = [];

function Profile (profilesDataObj) {
  this.img = profilesDataObj.img;
  this.name = profilesDataObj.name;
  this.bio = profilesDataObj.bio;
}

Profile.prototype.toHtml = function() {
  var renderProfiles = Handlebars.compile($('#profile-template').text());
  return renderProfiles(this);
};

$.getJSON('data/profiles.json', function(profiles) {
  profiles.forEach(function(profilesDataObject) {
    var profiles = new Profile(profilesDataObject);
    profileArray.push(profiles);
  });
});

function print () {
  if (profileArray.length > 0)
    $('#teamProfiles').empty();
  profileArray.forEach(function(data) {
    $('#teamProfiles').append(data.toHtml());
  });
};
