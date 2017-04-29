const tmi = require('tmi.js');

let options = {
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
	channels: ["devcoffee_"]
}
let client = new tmi.client(options);
client.connect();

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