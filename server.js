// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 1250;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Friends Objects (DATA)
// =============================================================
var friends = [
  {
    name: "Nick Herrera",
    imageURL: "image.com",
    quenstionOne: 1,
    questionTwo: 1,
    questionThree: 1,
    quenstionFour: 1,
    questionFive: 1,
    questionSix: 1,
    quenstionSeven: 1,
    questionEight: 1,
    questionNine: 1,
    questionTen: 1
  },
  {
    name: "Yoda",
    imageURL: "yodaimage.png",
    quenstionOne: 5,
    questionTwo: 5,
    questionThree: 5,
    quenstionFour: 5,
    questionFive: 5,
    questionSix: 5,
    quenstionSeven: 5,
    questionEight: 5,
    questionNine: 5,
    questionTen: 5
  },
  {
    name: "Mike Jones",
    imageURL: "MikeJones.com",
    quenstionOne: 3,
    questionTwo: 3,
    questionThree: 3,
    quenstionFour: 3,
    questionFive: 3,
    questionSix: 3,
    quenstionSeven: 3,
    questionEight: 3,
    questionNine: 3,
    questionTen: 3
  },
  {
    name: "Jeffy",
    imageURL: "Jeffyimage.com",
    quenstionOne: 2,
    questionTwo: 2,
    questionThree: 2,
    quenstionFour: 2,
    questionFive: 2,
    questionSix: 2,
    quenstionSeven: 2,
    questionEight: 2,
    questionNine: 2,
    questionTen: 2
  },

  {
    name: "Albert",
    imageURL: "Albertimage.com",
    quenstionOne: 4,
    questionTwo: 4,
    questionThree: 4,
    quenstionFour: 4,
    questionFive: 4,
    questionSix: 4,
    quenstionSeven: 4,
    questionEight: 4,
    questionNine: 4,
    questionTen: 4
  }
  
];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friends);
});


// need to update this to redirect to github repository
app.post("/api/friends", function(req, res) {
var newFriend = req.body;

console.log(newFriend);

friends.push(newFriend);

res.json(friends);
});



// Starts the server to begin listening
// =============================================================

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});