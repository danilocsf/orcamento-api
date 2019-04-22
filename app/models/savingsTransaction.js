const DateUtils = require("../utils/dateUtils");
const TransactionTypes = require("./transactionTypeEnum");

class SavingsTransaction extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
      {
        referenceMonthYear: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          default: DateUtils.getCurrentDateWithTheFirstDay()
        },
        monthYearValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false
        },
        transactionDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          default: new Date()
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        type: {
          type: DataTypes.ENUM(Object.values(TransactionTypes)),
          allownull: false
        }
      },
      {
        modelName: "SavingsTransaction",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: "savings_transaction",
        sequelize
      }
    );
  }
}

module.exports = SavingsTransaction;

