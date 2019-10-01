let db = require('../../models');

isUnique = (trail) => {
	return db.Plan
		.findOne({
			where: {
				name: trail
			}
		})
		.then((count) => {
			if (count != 0) {
				console.log('Similar Entries');
				return false;
			}
			console.log('No Similar Entries');
			return true;
		});
};

module.exports = function(app) {
	app.post('/trails/plan', (req, res) => {
		// console.log('Here at back end');
		console.log(req.body);
		db.Plan
			.create(
				{
					// where: {
					//     name: req.body.name
					// },
					// defaults: {
					name: req.body.name,
					city: req.body.city,
					state: req.body.region,
					rating: req.body.rating,
					length: req.body.length,
					url: req.body.url,
					UserId: req.body.id
				},
				{
					include: [
						{
                            association: db.Plan.User,
							as: 'Plan',
							through: 'User_Plan_Relation'
						}
					]
				}
			)
			.then(function() {
				console.log('what');
			});
	});

	app.post('/trails/done', (req, res) => {
		console.log(req.body);
	});

	app.post('/trails/favorite', (req, res) => {
		console.log(req.body);
	});
};
