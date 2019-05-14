const DateUtils = require("../utils/dateUtils");
const TableNames = require('../constants/constants').TableNames;
const Card = require('./card');
const SubCategory = require('./subCategory');

module.exports = function (sequelize, DataTypes) {
  const CardTransaction = sequelize.define("CardTransaction", {
    referenceMonthYear: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DateUtils.getCurrentDateWithTheFirstDay()
    },
    totalValue: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    numberOfparcels: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Card,
        key: 'id'
      }
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
    modelName: "CardTransaction",
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
    // false - don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    tableName: TableNames.CARD_TRANSACTION,
    sequelize,
    classMethods: {
      associate: function (models) {
        CardTransaction.belongsTo(models.Card, {
          foreignKey: 'cardId'
        });

        CardTransaction.belongsTo(models.SubCategory, {
          foreignKey: 'subCategoryId'
        });
      }
    }
  });
  return CardTransaction;
}

