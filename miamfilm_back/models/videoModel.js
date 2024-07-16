const { DataTypes } = require("sequelize")

module.exports = (instance) => {
    return instance.define(
        "video",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            released: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            director: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            actors: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            synopsis: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            runtime: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            poster: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            box_office: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
          timestamps: false,
        }
    )
}