/* EXAMPLE THREE */
const express = require('express')
// path comes from node, path handles those relative pathes
const path = require('path')

// bunch of compliments randomly send back
const complements = [
  'You like nice today',
  'That dress looks nice on you',
  'Have you been working out?',
  'You can do hard things',
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  'You made this',
  "You've learned a lot of things, and that's pretty hard to do",
]

// returns a random item from the complements array
function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length)
  return complements[randomIndex]
}

const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/complement', function (req, res) {
  // responds to the request with a Json object, with just one key: complement
  res
    .json({
      complement: getRandomComplement(),
    })
    .end()
})

// serve publicly, don't put user data in there!
app.use('/public', express.static('./public'))

app.listen(3000)
console.log('listening on http://localhost:3000')


/* Example TWO */
const express = require("express");

// create a new server
const app = express();

// app.get(url, callback): how to handle routes
app.get("/", function(req, res) {
  res.end("Welcome to my site!");
});

app.get("/complement", function(req, res) {
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");


/* EXAMPLE ONE */
// http is a library inside of node for handling connections
// if it's a pizza place, this is the telephone
const http = require("http");
// req - request, coming form http
// res - response, coming form http
// function that gets called every single time the server gets run, this is like the pick up of the phone
const server = http.createServer(function(req, res) {
  // “someone visited your URL, send back hello”
  console.log(`user visited ${req.url}`);
  res.end("hello!");
});
console.log("listening on http://localhost:3000");
server.listen(3000);
