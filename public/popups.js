'use strict';
// var settings = {

//   // Simply change the name in quotes with your name
//   social: {
    
//     // Twitch Name
//     twitchUsername: "ChangeThis",
    
//     // Twitter Name
//     twitterUsername: "ChangeThis",
//     },
//   // Gaming Popup Options
//   popup: {
//     // Enable Twitter
//     enableTwitter: 1,
//     // Time each network animation takes in seconds
//     aTime: 4,
    
//     // The delay for the animation cycle to restart in seconds
//     pauseTime: 120
//   }
// };

// // Load Social Network Names
// $( ".popup .right span" ).each(function() {
//     var socialName = settings.social[$(this).data('name')];
//     $(this).append( socialName );
// });

// // Load Social Popup
// $(".popup").each(function() {
//   var supporterEnable = settings.popup[$(this).data('box')],
//     boxName = $(this).data('box');

//   if (supporterEnable == 1) {
//     $('input[name=' + boxName + ']').prop('checked', true);
//     $(this).addClass("animate-popup");
//   } else if (supporterEnable === 0) {
//     $('input[name=' + boxName + ']').prop('checked', false);
//     $(this).addClass("no-popup");
//   } else {
//     return false;
//   }
// });

// // Animate Popup

// var popups = $('.animate-popup');
// var i = 0;
// var pT = settings.popup.pauseTime * 1000;

// function animatePopup() {
//   if (i >= popups.length) {
//     i = 0;
//   }
//   popups.eq(i).addClass("show-popup")
//     .delay(settings.popup.aTime * 1000)
//     .queue(function() {
//       $(this).removeClass("show-popup");
//       $(this).dequeue();
//       if (i == popups.length) {
//         setTimeout(animatePopup, pT);
//       } else {
//         animatePopup();
//       }
//     });
//   i++;
// }
// animatePopup();


(function () {
    const newWidget = {};

  newWidget.initnewWidgetPage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });
    $('#widget-form').on('change', newWidget.create);
    $('#widget-form').on('submit', newWidget.submit);
  };

  newWidget.create = function() {
    $('#widget-display').empty();
    let formWidget = new Widget({
      title: $('#widget-title').val(),
      author: $('#widget-author').val(),
      authorUrl: $('#widget-author-url').val(),
      body: $('#widget-body').val(),
    });
    $('.widget-display').append(formWidget.toHtml('#widget-template'));
  };

  newWidget.initnewWidgetPage();

function Widget(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Widget.all = [];

  Widget.prototype.toHtml = function() {
    let template = Handlebars.compile($('#widget-template').text());

    return template(this);
  };



})();