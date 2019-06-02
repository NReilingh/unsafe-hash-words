
// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const fs = require('fs');

const wordList = fs.readFileSync('./eff_short_wordlist_1.txt', 'utf8');

const dict = wordList.split('\n').map(e => {
    return e.split('\t')[1];
});

const unsafeHashWord = require('./unsafeHashWord.js')(dict);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/unsafehashword/:value', function(req, res) {
  console.log(req.params.value);
  res.send(unsafeHashWord(req.params.value));
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
