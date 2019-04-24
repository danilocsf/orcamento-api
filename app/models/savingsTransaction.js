const DateUtils = require("../utils/dateUtils");
const model = require("./index");
const TableNames = require('../utils/constants');

class SavingsTransaction extends Sequelize.Model {

  associate(model) {
    SavingsTransaction.belongsTo(model.Savings, {
      foreignKey: 'savingsId'
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
        monthYearValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false
        },
        transactionDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        transactionType: {
          type: DataTypes.ENUM(Object.values(model.TransactionTypes)),
          allownull: false
        },
        savingsId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: model.Savings,
            key: 'id'
          }
        }
      },
      {
        modelName: "SavingsTransaction",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: TableNames.SAVINGS_TRANSACTION,
        sequelize
      }
    );
  }
}

module.exports = SavingsTransaction;

