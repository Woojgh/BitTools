'use strict';

$(document).ready(function() {
  $('#about').hide();
});

$('#aboutNav').on('click', function() {
  $('#about').show().siblings().hide();
});

//about json
var profileArray = [];

function Profile (profilesDataObj) {
  this.img = profilesDataObj.img;
  this.name = profilesDataObj.name;
  this.bio = profilesDataObj.bio;
  this.url = profilesDataObj.url;
}

Profile.prototype.toHtml = function() {
  // var theTemplate = $('#profile-template').html();
  var renderProfiles = Handlebars.compile($('#profile-template').text());
  console.log(renderProfiles(this));
  return renderProfiles(this);
};

$.getJSON('/data/profiles.json', function(profiles) {
  profiles.forEach(function(profilesDataObject) {
    var profiles = new Profile(profilesDataObject);
    profileArray.push(profiles);
  });
});

function print () {
profileArray.forEach(function(data) {
  $('#about').append(data.toHtml());
});
}
print();

// .fetchAll = function() {
//   if(localStorage.portfolioData) {
//     Portfolio.loadAll(JSON.parse(localStorage.portfolioData));
//   }else{
//     $.getJSON('/data/dataSource.json').then(function(portfolioDataObj){
//       Portfolio.loadAll(portfolioDataObj);
//       console.log(portfolioDataObj);
//     });
//   }
// };
