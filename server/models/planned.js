module.exports = function (sequelize, DataTypes) {
    let Planned = sequelize.define("Planned", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
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