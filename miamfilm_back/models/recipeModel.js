const { DataTypes } = require("sequelize")

module.exports = (instance) => {
  return instance.define(
    "recipe",
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
      persons: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preparation_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      baking_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
}
