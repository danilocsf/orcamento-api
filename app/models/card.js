const TableNames = require('../constants/constants').TableNames;

module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cardOwner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    modelName: "Card",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // false - don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.CARD,
    classMethods: {
      associate: function (models) {
        Card.hasMany(models.CardTransaction, {
          foreignKey: 'cardId'
        });
      }
    }
  });
  return Card;
}
