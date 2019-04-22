const DateUtils = require("../utils/dateUtils");
class Income extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        expectedValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false,
          comment: "Value that is expected to be received"
        },
        receivedValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: true,
          comment: "The value received"
        },
        referenceMonthYear: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          default: DateUtils.getCurrentDateWithTheFirstDay(),
          comment: "The reference month and year for the given value"
        },
        dateOfReceipt: {
          type: DataTypes.DATEONLY,
          allowNull: true,
          comment: "When the value should be/was received"
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
          comment: "A description for the value (Salary, extra hours, etc)"
        },
        onlyCurrentMonth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
          comment:
            "Whether the value should be received only in the given month and year"
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

module.exports = Income;
