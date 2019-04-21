'use strict';

const DateUtils = require("../utils/DateUtils");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('income', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      expectedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      receivedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true
      },
      referenceMonthYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        default: DateUtils.getCurrentDateWithTheFirstDay()
      },
      dateOfReceipt: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      onlyCurrentMonth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
