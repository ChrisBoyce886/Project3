let db = require("../../models");
let passport = require("passport");
const secret = process.env.SESSION_SECRET

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
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                username: "username",
                password: req.body.password
            })
            .then(function () {
                res.send(200).end();
            }).catch(function (err) {
                console.log(err.message);
                res.status(100).json(err)
            })
        // const payload = {
        //     sub: user.id
        // }

        // jwt.sign(payload, secret);

    })
}