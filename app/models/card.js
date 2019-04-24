const model = require('./index')


class Card extends Sequelize.Model {

  associate(model) {
    Card.hasMany(model.CardTransaction, {
      foreignKey: 'cadId'
    });
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        cardNumber: {
          type: DataTypes.STRING,
          allowNull: false
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
      },
      {
        modelName: "Card",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: "card",
        sequelize
      }
    );
  }
}

module.exports = Card;

