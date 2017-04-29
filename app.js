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
		username:"woojgh",
		password: "oauth:z87bh5uupjlzydic0n339fch9ek3f5"
	},
	channels: ["Woojgh"]
}
var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
	client.action("Woojgh", user['display-name'] + "Noob testing" )
});
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