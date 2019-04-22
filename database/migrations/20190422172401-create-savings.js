'use strict';

const DateUtils = require("../../app/utils/dateUtils");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('savings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Savings account number"
      },
      currentValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Current value of savings"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "A description for this savings account"
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true,
        comment: "Whether the savings account is active or not."
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },{
      comment: "Registers of all savings accounts",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('savings');
  }
};