const express = require("express");
const path = require("path");
const morgan  = require('morgan');
const trailRoutes = require("./routes/api/trails");
const PORT = process.env.PORT || 3001;
const app = express();

const passport = require("passport");
require("./config/passport")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('short'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use apiRoutes
app.use('/api',trailRoutes)
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
