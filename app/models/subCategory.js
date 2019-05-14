const TableNames = require('../constants/constants').TableNames;
const TableConstraints = require('../constants/constants').TableConstraints;
const Category = require('./category');

module.exports = function (sequelize, DataTypes) {
  const SubCategory = sequelize.define("SubCategory", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: TableConstraints.UNIQUE_SUB_CATEGORY
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: TableConstraints.UNIQUE_SUB_CATEGORY,
      reference: {
        model: Category,
        key: 'id'
      }
    }
  }, {
    modelName: "SubCategory",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // false - don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.SUB_CATEGORY,
    classMethods: {
      associate: function (models) {
        SubCategory.belongsTo(models.Category, {
          foreignKey: 'categoryId'
        });

        SubCategory.belongsTo(models.CardTransaction, {
          foreignKey: 'subCategoryId'
        });

        SubCategory.belongsTo(models.FixedExpense, {
          foreignKey: 'subCategoryId'
        });

        SubCategory.belongsTo(models.ExpenseRecords, {
          foreignKey: 'subCategoryId'
        });
      }
    }
  });
  return SubCategory;
}