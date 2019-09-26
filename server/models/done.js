module.exports = function (sequelize, DataTypes) {
    let Done = sequelize.define("Done", {

        }

    )
}

Done.associate = (models) => {
    Done.belongsToMany(models.User, {
        as: "Done",
        through: "done_trails"
    })
    return Done
}