module.exports = function (sequelize, DataTypes) {
    let Planned = sequelize.define("Planned", {

        }

    )
}

Planned.associate = (models) => {
    Planned.belongsToMany(models.User, {
        as: "Planned",
        through: "planned_trails"
    })
    return Planned
}