const DateUtils = require("../utils/dateUtils");
const TableNames = require('../utils/constants').TableNames;

class FixedExpense extends Sequelize.Model {

  associate(model) {
    FixedExpense.belongsTo(model.SubCategory, {
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
        numberOfMonths: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        subCategoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: model.SubCategory,
            key: 'id'
          }
        },
        createdAt: DataTypes.DATEONLY,
        updatedAt: DataTypes.DATEONLY
      },
      {
        modelName: "FixedExpense",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,
        tableName: TableNames.FIXED_EXPENSE,
        sequelize
      }
    );
  }
}

module.exports = FixedExpense;
