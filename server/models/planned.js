module.exports = function(sequelize, DataTypes) {
	let Planned = sequelize.define('Planned', {
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
            type: DataTypes.STRING,
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

Planned.associate = (models) => {
	Planned.belongsToMany(models.User, {
		as: 'Planned',
		through: 'planned_trails'
	});
	return Planned;
};

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
