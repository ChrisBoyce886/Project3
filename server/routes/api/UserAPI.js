let db = require("../../models");
let passport = require("passport");

module.exports = function (app) {

    // Post: Authenticate user
    app.post("/user/authenticate", (req, res, next) => 
    {
        return passport.authenticate("local",(err, token, user) => {
            console.log(user);
            console.log(err);
            // console.log(token);
            res.status(200);
        })(req, res, next)
    });

    // Post : Add User
    app.post("/user/create", (req, res) => {
        console.log(req.body)
        db.User.create({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            })
            .then(function () {
                res.send(200).end();
            }).catch(function (err) {
                console.log(err.message);
                res.status(401).json(err)
            })
        // const payload = {
        //     sub: user.id
        // }

        // jwt.sign(payload, secret);

    })
}