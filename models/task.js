'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      id: {
        allowNull: false,
        autoIcrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        type: DataTypes.STRING(512),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: 'Task',
      tableName: 'tasks'
    }
  );
  return Task;
};
