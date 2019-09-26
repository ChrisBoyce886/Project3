module.exports = function (sequelize, DataTypes) {
    let Favorite = sequelize.define("Favorite", {

        }

    )
}

Favorite.associate = (models) => {
    Favorite.belongsToMany(models.User, {
        as: "Favorite",
        through: "favorite_trails"
    })
    return Favorite
}