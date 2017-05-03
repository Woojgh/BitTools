'use strict';
// #1 define constants and requirements
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const tmi = require('tmi.js');
const app = express();
const PORT = process.env.PORT || 31337;

// const conString = 'postgres://postgres:postgres@localhost:5433/day3'
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// #2 set up the http requests
app.get('/', function(request, response){
	response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
	console.log(`My server is running on port: ${PORT}`);
});

// #3 create Database
loadDB();

function loadDB() {
	client.query(`
		CREATE TABLE IF NOT EXISTS
		users (
			user_id SERIAL PRIMARY KEY,
			username VARCHAR(255) UNIQUE NOT NULL,
			widget_text VARCHAR(1000) NOT NULL,
			text_color VARCHAR(255) NOT NULL,
			fill_color VARCHAR(255) NOT NULL,
			goal INTEGER NOT NULL
		);`
	)
	.catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    choices (
      choice_id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(user_id),
      choice_text VARCHAR(255) NOT NULL,
			choice_color VARCHAR(255) NOT NULL,
			value INTEGER
    );`
  )
  .catch(console.error);
}

// #4 populate Database
app.post('/choices', (request, response) => {
	console.log(request.body);
  client.query(
    'INSERT INTO users(username, widget_text, text_color, fill_color, goal) VALUES($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
    [request.body.username, request.body.widgetText, request.body.textColor, request.body.fillColor, request.body.goal]
  )
  .then(() => {
    client.query(`
      INSERT INTO
      choices(user_id, choice_text, choice_color, value)
      SELECT user_id, $1, $2, $3
      FROM users
      WHERE username=$4;
      `,
      [
        request.body.choiceText,
        request.body.choiceColor,
        request.body.value,
        request.body.username,
      ]
    )
  })
  .then(() => response.send('Insert complete'))
  .catch(console.error);
});

app.delete('/choices/:username', (request, response) => {
  client.query(`
    DELETE FROM choices
    INNER JOIN users
			ON choices.user_id=users.user_id
		WHERE username = $1;`,
    [request.params.username]
  )
  .then(() => response.send('Delete complete'))
  .catch(console.error);
});

// #5 retrieve info from database
app.get('/choices/:username', (request, response) => {
  client.query(`
    SELECT * FROM choices
    INNER JOIN users
      ON choices.user_id=users.user_id
		WHERE username = $1;`,
		[request.params.username]
  )
  .then(result => {
		console.log(result.rows);
		response.send(result.rows);
	})
  .catch(console.error);
});
