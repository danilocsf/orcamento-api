const DateUtils = require("../utils/dateUtils");
const TableNames = require('../constants/constants').TableNames;

module.exports = function (sequelize, DataTypes) {
  const Income = sequelize.define("Income", {
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
      defaultValue: DateUtils.getCurrentDateWithTheFirstDay()
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
    },
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY
  }, {
    modelName: "Income",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,
    tableName: TableNames.INCOME,
    classMethods: {
      fillDateOfReceipt() {
        if(this.receivedValue && !this.dateOfReceipt){
          this.dateOfReceipt=DateUtils.getCurrentDateWithTheFirstDay();
        }
      }
    }

  });

  Income.addHook('beforeUpdate', (income, options) => {
    // 'transaction' will be available in options.transaction
    // This operation will be part of the same transaction as the
    // original Income.update call.
    Income.fillDateOfReceipt();
  });

  Income.addHook('beforeCreate', (income, options) => {
    // 'transaction' will be available in options.transaction
    // This operation will be part of the same transaction as the
    // original Income.create call.
    Income.fillDateOfReceipt();
  });


  return Income;
}
