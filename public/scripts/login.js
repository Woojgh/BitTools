'use strict';
(function(module) {
	$('#widget-form').hide();
	var twitchLogin = {};
  var host = document.location.href.split("//")[1].split("/")[0];

	Twitch.init({clientId: 'pxic46d4dsydwhxvlh341kb7dgdnc6'}, function(error, status) {
    if (status.authenticated) {
  $('.twitch-connect').hide();
  $('#widget-form').show();
  if (document.location.hash != "")
			{
				({ name: "auth", newValue: document.location.hash.split("=")[1].split("&")[0], secure: !isDev });
				({ name: "authchange", newValue: "true" });
}
})

	$('.twitch-connect').click(function () {
	  Twitch.login({
	  	redirect_uri: 'https://bittoolscod301.herokuapp.com',
	    scope: ['user_read', 'channel_read']
	  });
	})

  var access
	module.twitchLogin = twitchLogin;
})(window);
