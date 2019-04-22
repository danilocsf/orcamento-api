const DateUtils = require("../utils/dateUtils");
class Income extends Sequelize.Model {

  fillDateOfReceipt() {
    if(this.receivedValue && !this.dateOfReceipt){
      this.dateOfReceipt=DateUtils.getCurrentDateWithTheFirstDay();
    }
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        expectedValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false
        },
        receivedValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: true
        },
        referenceMonthYear: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          default: DateUtils.getCurrentDateWithTheFirstDay()
        },
        dateOfReceipt: {
          type: DataTypes.DATEONLY,
          allowNull: true
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        onlyCurrentMonth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
      {
        modelName: "income",
        comment: "Registers of all stable and monthly incomes",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        tableName: "income",
        sequelize
      }
    );
  }
}

Income.addHook('beforeUpdate', (income, options) => {
  // 'transaction' will be available in options.transaction
  // This operation will be part of the same transaction as the
  // original Income.update call.
  Income.fillDateOfReceipt();
});

Income.addHook('beforeCreate', (income, options) => {
  // 'transaction' will be available in options.transaction
  // This operation will be part of the same transaction as the
  // original Income.create call.
  Income.fillDateOfReceipt();
});


module.exports = Income;
