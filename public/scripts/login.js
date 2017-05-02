'use strict';
$('#widget-form').hide();
var host = document.location.href.split("//")[1].split("/")[0];

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
    if (document.location.hash != "")
  			{
  				var newValue = document.location.hash.split("=")[1].split("&")[0];
  }
  $.ajax({
       url: 'https://api.twitch.tv/kraken',
       beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json"),
            xhr.setRequestHeader("Authorization", "OAuth cfabdegwdoklmawdzdo98xt2fo512y")
       }, success: function(data){
           alert(data);
           //process the JSON data etc
       }
})
})
