module.exports = function (sequelize, DataTypes) {
	let Plan = sequelize.define('Plan', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		length: {
			type: DataTypes.STRING,
			allowNull: true
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	Plan.associate = (models) => {
		Plan.belongsToMany(models.User, {
			as: 'Plan',
			through: 'User_Plan_Relation'
		});
		return Plan;
	};
	return Plan
}

// id={trail.id}
// name={trail.name}
// city={trail.city}
// region={trail.region}
// description={trail.description}
// difficulty={trail.difficulty}
// features={trail.features}
// rating={trail.rating}
// thumbnail={trail.thumbnail}
// url={trail.url}
// length={trail.length}
// lat={trail.lat}
// lon={trail.lon}