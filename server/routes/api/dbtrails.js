let db = require('../../models');

module.exports = function(app) {
	app.post('/trails/plan', (req, res) => {
		console.log('Here at back end');
		console.log(req.body);
		// console.log(res);
	});

	app.post('/trails/done', (req, res) => {
		console.log(req.body);
	});

	app.post('/trails/favorite', (req, res) => {
		console.log(req.body);
	});
};
