// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require('bcryptjs');
// Creating our User model
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isEmail: true
			}
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	});
	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
	User.prototype.validPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};
	// Hooks are automatic methods that run during various phases of the User Model lifecycle
	// In this case, before a User is created, we will automatically hash their password
	User.addHook('beforeCreate', function (user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	});

	User.associate = (models) => {
		User.hasMany(models.Done, {
			onDelete: 'cascade'
		});
		User.hasMany(models.Favorite, {
			onDelete: 'cascade'
		});
		User.hasMany(models.Plan, {
			onDelete: 'cascade'
		});
		return User;
	};
	return User;
}