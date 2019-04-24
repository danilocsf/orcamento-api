const model = require('./index')


class Savings extends Sequelize.Model {

  associate(model) {
    Savings.hasMany(model.SavingsTransaction, {
      foreignKey: 'savingsId'
    });
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        accountNumber: {
          type: DataTypes.STRING,
          allowNull: true
        },
        currentValue: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        createdAt: DataTypes.DATEONLY,
        updatedAt: DataTypes.DATEONLY
      },
      {
        modelName: "Savings",
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
        // false - don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,
        //
        tableName: "savings",
        sequelize
      }
    );
  }
}

module.exports = Savings;

