'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();

  };

  module.aboutController = aboutController;
})(window);


//about json
var profileArray = [];

function Profile (profilesDataObj) {
  this.img = profilesDataObj.img;
  this.name = profilesDataObj.name;
  this.bio = profilesDataObj.bio;
  this.url = profilesDataObj.url;
}

Profile.prototype.toHtml = function() {
  var theTemplate = $('#profileTemplate').html();
  var renderProfiles = Handlebars.compile(theTemplate);
  return theTemplate(this);
};

$.getJSON('profiles.json', function(profiles) {
  profiles.forEach(function(profilesDataObject) {
    var profiles = new Profile(profilesDataObject);
    $('#about').append(profiles.toHtml());
  });
});

profileArray.forEach(function(profile) {
  $('#profile').append(profile.toHtml());
})
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
