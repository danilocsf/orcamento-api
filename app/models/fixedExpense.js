
const TableNames = require('../constants/constants').TableNames;
const SubCategory = require('./subCategory');

module.exports = function (sequelize, DataTypes) {
  const FixedExpense = sequelize.define("FixedExpense", {
    expectedValue: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    amountSpent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
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
        model: SubCategory,
        key: 'id'
      }
    }
  }, {
    modelName: "FixedExpense",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.FIXED_EXPENSE,
    classMethods: {
      associate(model) {
        FixedExpense.belongsTo(model.SubCategory, {
          foreignKey: 'subCategoryId'
        });
      }
    }

  });
  return FixedExpense;
}
