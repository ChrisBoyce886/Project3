const express = require("express");
const path = require("path");
const morgan  = require('morgan');
const trailRoutes = require("./routes/api/trails");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session")

const passport = require("./server/config/passport");
<<<<<<< HEAD
const db = require("./models")
=======
const db = require("./server/models")

let syncOptions = { force: false };
>>>>>>> 4c3840bf153fdab84bf0f0e732b9a972b7184588

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('short'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  syncOptions.force = true;
  app.use(express.static("client/build"));
}
// Use apiRoutes
app.use('/api',trailRoutes)

// Initialize session for passport
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

