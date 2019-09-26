module.exports = function(sequelize, DataTypes) {
	let Favorite = sequelize.define('Favorite', {
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

	Favorite.associate = (models) => {
		Favorite.belongsToMany(models.User, {
			as: 'Favorite',
			through: 'favorite_trails'
		});
		return Favorite;
	};
};
