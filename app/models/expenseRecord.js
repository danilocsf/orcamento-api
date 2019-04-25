const DateUtils = require("../utils/dateUtils");
const TableNames = require('../utils/constants').TableNames;

class ExpenseRecord extends Sequelize.Model {

  associate(model) {
    ExpenseRecord.belongsTo(model.SubCategory, {
      foreignKey: 'subCategoryId'
    });
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
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
            model: model.SubCategory,
            key: 'id'
          }
        }
      },
      {
        modelName: "ExpenseRecord",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: TableNames.EXPENSE_RECORD,
        sequelize
      }
    );
  }
}

module.exports = ExpenseRecord;
