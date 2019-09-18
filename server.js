const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

const passport = require("./config/passport");
const db = require("./models")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  syncOptions.force = true;
  app.use(express.static("client/build"));
}

app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

