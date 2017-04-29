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