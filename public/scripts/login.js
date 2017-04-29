'use strict';
(function(module) {
	$('#widget-create').hide();
	var twitchLogin = {};

	Twitch.init({clientId: 'pxic46d4dsydwhxvlh341kb7dgdnc6'}, function(error, status) {
    if (status.authenticated) {
  $('.twitch-connect').hide();
  $('#widget-create').show();
}
  		});

	$('.twitch-connect').click(function () {
	  Twitch.login({
	    scope: ['user_read', 'channel_read']
	  });
	})	
	module.twitchLogin = twitchLogin;
})(window);