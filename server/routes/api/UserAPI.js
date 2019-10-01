let db = require('../../models');
let passport = require('passport');

module.exports = function(app) {
	// Post: Authenticate user
	app.post('/user/authenticate', (req, res, next) => {
		return passport.authenticate('local', (err, user) => {
			console.log(user.id);
			// console.log(err);
			// res.status(200);
			res.json(user.id);
		})(req, res, next);
	});
	app.post('/planned/plan', (req, res) => {
		console.log('REQUESTTTTT',req.body)
	
	})
	// Post : Add User
	app.post('/user/create', (req, res) => {
		console.log(req.body);
		db.User
			.create({
				firstName: req.body.firstname,
				lastName: req.body.lastname,
				email: req.body.email,
				username: req.body.username,
				password: req.body.password
			})
			.then(function() {
				res.sendStatus(200).end();
			})
			.catch(function(err) {
				console.log(err.message);
				res.status(401).json(err);
			});
	});
};
