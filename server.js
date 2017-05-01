// #1 define constants and requirements
const express = require('express');

const app = express();

const PORT = process.env.PORT || 31337;

app.use(express.static('./public'));
// #2 set up the http requests
app.get('/', function(request, response){
	response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
	console.log(`My server is running on port: ${PORT}`);
});
// #3 create Database

// #4 populate Database

// #5 retrieve info from database

// #6 populate options
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

client.on('chat', function (channel, user, message, self) {
	client.action("Woojgh", user['display-name'] + "Cheer thanks" )
});

// client.on('chat', function (channel, userstate, message) {
// 	client.action("Woojgh", user['display-name'] + "Cheer thanks" )
// });
