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
  client.query(
    'INSERT INTO users(username, widget_text, text_color, fill_color, goal) VALUES($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
    [request.body.username, request.body.widgetText, request.body.textColor, request.body.fillColor, request.body.goal]
  )
  .then(() => {
    client.query(`
      INSERT INTO
      choices(user_id, choice_text, choice_color, value)
      SELECT author_id, $1, $2, $3
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

app.put('/articles/:id', (request, response) => {
  client.query(`
    UPDATE authors
    SET author=$1, "authorUrl"=$2
    WHERE author_id=$3
    `,
    [request.body.author, request.body.authorUrl, request.body.author_id]
  )
  .then(() => {
    client.query(`
      UPDATE articles
      SET author_id=$1, title=$2, category=$3, "publishedOn"=$4, body=$5
      WHERE article_id=$6
      `,
      [
        request.body.author_id,
        request.body.title,
        request.body.category,
        request.body.publishedOn,
        request.body.body,
        request.params.id
      ]
    )
  })
  .then(() => response.send('Update complete'))
  .catch(console.error);
});

// #5 retrieve info from database
app.get('/users/:username', (request, response) => {
  client.query(`
    SELECT * FROM users
    INNER JOIN choices
      ON choices.user_id=users.user_id
		WHERE username = $1;`,
		[request.params.username]
  )
  .then(result => response.send(result.rows))
  .catch(console.error);
});

// #6 populate options
var tmi = require('tmi.js');
