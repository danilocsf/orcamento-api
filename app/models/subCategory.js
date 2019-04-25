const TableNames = require('../utils/constants').TableNames;
const TableConstraints = require('../utils/constants').TableConstraints;

class SubCategory extends Sequelize.Model {

  associate(model) {
    SubCategory.belongsTo(model.Category, {
      foreignKey: 'categoryId'
    });

    SubCategory.belongsTo(model.CardTransaction, {
      foreignKey: 'subCategoryId'
    });

    SubCategory.belongsTo(model.FixedExpense, {
      foreignKey: 'subCategoryId'
    });    
  }

  static init(sequelize, DataTypes) {
    return super.init({
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: TableConstraints.UNIQUE_SUB_CATEGORY
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: TableConstraints.UNIQUE_SUB_CATEGORY,
          reference:{
            model: model.Category,
            key: 'id'
          }
        }
      },
      {
        modelName: "SubCategory",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: TableNames.SUB_CATEGORY,
        sequelize
      }
    );
  }
}

module.exports = SubCategory;

