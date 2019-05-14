const DateUtils = require("../utils/dateUtils");
const TableNames = require('../constants/constants').TableNames;
const TransactionTypes = require("../constants/transactionTypeEnum");
const Savings = require("./savings");

module.exports = function (sequelize, DataTypes) {
  const SavingsTransaction = sequelize.define("SavingsTransaction", {
    referenceMonthYear: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DateUtils.getCurrentDateWithTheFirstDay()
    },
    monthYearValue: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    transactionDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transactionType: {
      type: DataTypes.ENUM(Object.values(TransactionTypes)),
      allownull: false
    },
    savingsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Savings,
        key: 'id'
      }
    }
  }, {
    modelName: "SavingsTransaction",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // false - don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.SAVINGS_TRANSACTION,
    classMethods: {
      associate(model) {
        SavingsTransaction.belongsTo(model.Savings, {
          foreignKey: 'savingsId'
        });
      }
    }

  });
  return SavingsTransaction;
}