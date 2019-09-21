let db = require("../../models");
let passport = require("passport");

module.exports = function (app) {

    // Post: Authenticate user
    app.post("/user/authenticate",
    passport.authenticate("local", {
        successRedirect: "/userProfile",
        failureRedirect: "/"
    }));

    // Post : Add User
    app.post("/user/create", (req, res) => {
        console.log(req.body)
        db.User.create({

        })
    })
    .then( () => {
        res.send(200).end();
    }).catch( (err) => {
        res.status(401).json(err)
    })
}