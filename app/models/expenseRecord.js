const DateUtils = require("../utils/dateUtils");
const TableNames = require('../constants/constants').TableNames;
const SubCategory = require('./subCategory');

module.exports = function (sequelize, DataTypes) {
  const ExpenseRecord = sequelize.define("ExpenseRecord", {
    expectedValue: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    amountSpent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    referenceMonthYear: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DateUtils.getCurrentDateWithTheFirstDay()
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isFixedExpense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isCardExpense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    subCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SubCategory,
        key: 'id'
      }
    }
  }, {
    modelName: "ExpenseRecord",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.EXPENSE_RECORD,
    classMethods: {
      associate: function (models) {
        ExpenseRecord.belongsTo(models.SubCategory, {
          foreignKey: 'subCategoryId'
        });
      }
    }

  });
  return ExpenseRecord;
}

