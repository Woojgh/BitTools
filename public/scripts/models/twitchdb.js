var options = {
  options:{
    debug: true
  },
  connection: {
    cluster: 'aws',
    reconnect: true
  },
  identity: {
    username:'tooltest',
    password: 'oauth:dse0huqbr6wzz2j8wg5s2a3ehcfjsm'
  },
  channels: ['Woojgh']
};

var twitchClient = new tmi.client(options);
twitchClient.connect();

// twitchClient.on('chat', function (channel, user, message, self) {
//   twitchClient.action('Woojgh', user['display-name'] + 'Cheer thanks');
// });

// client.on('chat', function (channel, userstate, message) {
// 	client.action("Woojgh", user['display-name'] + "Cheer thanks" )
// });
