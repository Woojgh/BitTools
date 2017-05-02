'use strict';
(function(module) {
	$('#widget-form').hide();
	var twitchLogin = {};

	Twitch.init({clientId: 'pxic46d4dsydwhxvlh341kb7dgdnc6'}, function(error, status) {
    if (status.authenticated) {
  $('.twitch-connect').hide();
  $('#widget-form').show();
}
  		});

	$('.twitch-connect').click(function () {
	  Twitch.login({
	  	redirect_uri: 'https://bittoolscod301.herokuapp.com',
	    scope: ['user_read', 'channel_read']
	  });
	})	
	module.twitchLogin = twitchLogin;
})(window);