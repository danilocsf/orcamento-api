'use strict';

const DateUtils = require("../../app/utils/dateUtils");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('income', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      expectedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Value that is expected to be received"
      },
      receivedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
        comment: "The value received in the current month"
      },
      referenceMonthYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        default: DateUtils.getCurrentDateWithTheFirstDay(),
        comment: "The reference month and year for the given value"
      },
      dateOfReceipt: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "When the value should be/was received"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "A description for the value (Salary, extra hours, etc)"
      },
      onlyCurrentMonth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment:
            "Whether the value should be received only in the given month and year"
      }
    },{
      comment: "Registers of all stable and monthly incomes",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('income');
  }
};
