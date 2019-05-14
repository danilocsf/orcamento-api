const TableNames = require('../constants/constants').TableNames;

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    modelName: "Category",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // false - don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.CATEGORY,
    classMethods: {
      associate: function (models) {
        Category.hasMany(models.SubCategory, {
          foreignKey: 'categoryId'
        });
      }
    }

  });
  return Category;
}