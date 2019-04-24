const DateUtils = require("../utils/dateUtils");
const model = require("./index");

class CardTransaction extends Sequelize.Model {

  associate(model) {
    CardTransaction.belongsTo(model.Card, {
      foreignKey: 'cardId'
    });
  }
  static init(sequelize, DataTypes) {
    return super.init(
      {
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
            model: model.Card,
            key: 'id'
          }
        }
      },
      {
        modelName: "CardTransaction",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: "card_transaction",
        sequelize
      }
    );
  }
}

module.exports = SavingsTransaction;

