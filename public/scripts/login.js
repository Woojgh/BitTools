'use strict';
// $('#widget-form').hide();
// var host = document.location.href.split("//")[1].split("/")[0];

// Twitch.init({clientId: 'pxic46d4dsydwhxvlh341kb7dgdnc6'}, function(error, status) {
//   if (status.authenticated) {
// $('.twitch-connect').hide();
// $('#widget-form').show();
//
// }
// });
//
$('.twitch-connect').click(function () {
  // Twitch.login({
  // 	redirect_uri: 'https://bittoolscod301.herokuapp.com',
  //   scope: ['user_read', 'channel_read']
  // });
  window.location = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=pxic46d4dsydwhxvlh341kb7dgdnc6&redirect_uri=https://bittoolscod301.herokuapp.com&scope=user_read+channel_read';
});
  if (window.location.href.includes('?code')) {
  // console.log(document.location.hash);
    // if (document.location.hash != "")
  			// {
  				var newValue = document.location.href.split("=")[1].split("&")[0];
          console.log(newValue);
  // // }
  $.ajax({
       url: 'https://api.twitch.tv/kraken',
       headers: {
         Accept: "application/vnd.twitchtv.v5+json",
         Authorization: `OAuth ${newValue}`,
         "Client-ID": "pxic46d4dsydwhxvlh341kb7dgdnc6"
       },
      //  beforeSend: function(xhr) {
      //       xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json"),
      //       xhr.setRequestHeader("Authorization", `OAuth ${newValue}`)
       }, success: function(data){
           console.log(data);
           //process the JSON data etc
       }
})
}
