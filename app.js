var tmi = require('tmi.js');

var options = {
	options:{
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username:"tooltest",
		password: "oauth:dse0huqbr6wzz2j8wg5s2a3ehcfjsm"
	},
	channels: ["Woojgh"]
}
var client = new tmi.client(options);
client.connect();

client.on('cheer', function (channel, userstate, message) {
	client.action("Woojgh", user['display-name'] + "Cheer thanks" )
});


var settings = {

  // Simply change the name in quotes with your name
  social: {
    
    // Twitch Name
    twitchUsername: "ChangeThis",
    
    // Twitter Name
    twitterUsername: "ChangeThis",
    
    // Facebook Name
    facebookUsername: "ChangeThis",
    
    // Instagram Name
    instagramUsername: "ChangeThis",
    
    // Youtube Name
    youtubeUsername: "ChangeThis",
    
    // Tumblr Name
    tumblrUsername: "ChangeThis",
    
    // Paypal Name
    paypalUsername: "ChangeThis",
    
    // Patreon Name
    patreonUsername: "ChangeThis",
    
    // Snapchat Name
    snapchatUsername: "ChangeThis",
    
     // Steam Name
    steamUsername: "ChangeThis",
    
     // Xbox Name
    xboxUsername: "ChangeThis",
    
     // Playstation Network Name
    psnUsername: "ChangeThis",
    
    // Origin Network Name
    originUsername: "ChangeThis",
    
    // Uplay Network Name
    uplayUsername: "ChangeThis",
    
    // Nintendo Network Name
    nintendoUsername: "ChangeThis",
    
    // Battle Net Network Name
    battlenetUsername: "ChangeThis",
    
    // Deviant Art Network Name
    deviantartUsername: "ChangeThis",
   
    // Reddit Network Name
    redditUsername: "ChangeThis",
    
    // Game Wisp Network Name
    gamewispUsername: "ChangeThis",
    
    // Plays.tv Network Name
    playstvUsername: "ChangeThis"
    
  },

  // Gaming Popup Options
  popup: {
    
    // This is where you enable or disable networks
    // 1 means enabled, 0 means disabled
    
    // Enable Twitter
    enableTwitter: 1,
    
    // Enable Facebook
    enableFacebook: 1,
    
    // Enable Instagram
    enableInstagram: 1,
    
    // Enable YouTube
    enableYoutube: 1,
    
    // Enable Tumblr
    enableTumblr: 1,
    
    // Enable Twitch
    enableTwitch: 1,
    
    // Enable PayPal
    enablePaypal: 1,
    
     // Enable Patreon
    enablePatreon: 1,
    
    // Enable Snapchat
    enableSnapchat: 1,
    
    // Enable Steam
    enableSteam: 1,
    
    // Enable Xbox
    enableXbox: 1,
    
    // Enable Playstation Network
    enablePsn: 1,
    
     // Enable Origin Network
    enableOrigin: 1,
    
    // Enable Uplay Network
    enableUplay: 1,
    
    // Enable Nintendo Network
    enableNintendo: 1,
    
    // Enable Battle Net Network
    enableBattleNet: 1,
    
    // Enable Deviant Art Network
    enableDeviantArt: 1,
    
    // Enable Reddit Network
    enableReddit: 1,
    
    // Enable Game Wisp Network
    enableGameWisp: 1,
    
    // Enable Plays TV Network
    enablePlaysTv: 1,
    
    
    //
    // Times to update
    //
    
    // Time each network animation takes in seconds
    aTime: 4,
    
    // The delay for the animation cycle to restart in seconds
    pauseTime: 120
  }
};

// You're all done
//
//
//
//
//
//
//
//
// No need to go any further!

// Load Social Network Names
$( ".popup .right span" ).each(function() {
    var socialName = settings.social[$(this).data('name')];
    $(this).append( socialName );
});

// Load Social Popup
$(".popup").each(function() {
  var supporterEnable = settings.popup[$(this).data('box')],
    boxName = $(this).data('box');

  if (supporterEnable == 1) {
    $('input[name=' + boxName + ']').prop('checked', true);
    $(this).addClass("animate-popup");
  } else if (supporterEnable === 0) {
    $('input[name=' + boxName + ']').prop('checked', false);
    $(this).addClass("no-popup");
  } else {
    return false;
  }
});

// Animate Popup

var popups = $('.animate-popup');
var i = 0;
var pT = settings.popup.pauseTime * 1000;

function animatePopup() {
  if (i >= popups.length) {
    i = 0;
  }
  popups.eq(i).addClass("show-popup")
    .delay(settings.popup.aTime * 1000)
    .queue(function() {
      $(this).removeClass("show-popup");
      $(this).dequeue();
      if (i == popups.length) {
        setTimeout(animatePopup, pT);
      } else {
        animatePopup();
      }
    });
  i++;
}
animatePopup();
// client.api({
//     url: "https://api.twitch.tv/kraken/user",
//     method: "GET",
//     headers: {
//         "Accept": "application/vnd.twitchtv.v3+json",
//         "Authorization": "OAuth 3eb787117110834e079932bedfb8e6a7",
//         "Client-ID": "1dac77895e8f56fa1a71e7c43ef09d87"
//     }
// }, function(err, res, body) {
//     console.log(body);
// });