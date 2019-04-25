const TableNames = require('../utils/constants').TableNames;

class Category extends Sequelize.Model {

  associate(model) {
    Category.hasMany(model.SubCategory, {
      foreignKey: 'categoryId'
    });
  }

  static init(sequelize, DataTypes) {
    return super.init({
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: "Category",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: TableNames.CATEGORY,
        sequelize
      }
    );
  }
}

module.exports = Category;

