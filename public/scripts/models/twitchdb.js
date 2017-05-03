var options = {
  options:{
    debug: true
  },
  connection: {
    cluster: 'aws',
    reconnect: true
  },
  identity: {
    username: userInfo.currentUser,
    password: `oauth:${userInfo.OAuth}`
  },
  channels: [userInfo.currentUser]
};

var twitchClient = new tmi.client(options);
twitchClient.connect();

// twitchClient.on('chat', function (channel, user, message, self) {
//   twitchClient.action('Woojgh', user['display-name'] + 'Cheer thanks');
// });

// client.on('chat', function (channel, userstate, message) {
// 	client.action("Woojgh", user['display-name'] + "Cheer thanks" )
// });
