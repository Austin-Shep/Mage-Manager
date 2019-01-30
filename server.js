const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport')
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect('mongodb://localhost:27017/login');



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({
  secret:"secretSecrets",
  saveUninitialized:false,
  resave:false
}))

app.use(passport.initialize())
app.use(passport.session())


// Define API routes here
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "./client/src/pages/Landing"))
})
app.get("/charsheet", (req, res) => {
res.sendFile(path.join(__dirname, "./client/src/pages/Sheet"))
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});