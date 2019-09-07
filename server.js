const express = require("express");
var app = express();
const path = require("path");
var bodyParser = require("body-parser");

//MIDDLEWARE================================================================

//Allow post requests to be handled
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serve up the React application
app.use(express.static(path.resolve(__dirname, "build")));

//Utilize back-end routes
app.use(require("./routes.js"));

//START SERVER================================================================

var PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Server listening on Port " + PORT + "...");
});
