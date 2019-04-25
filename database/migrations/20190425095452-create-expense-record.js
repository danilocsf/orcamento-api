'use strict';
const TableNames = require('../../app/utils/constants').TableNames;

const TABLE_NAME = TableNames.EXPENSE_RECORD;

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      expectedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Valor esperado a ser gasto"
      },
      amountSpent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
        comment: "Valor de fato gasto"
      },
      referenceMonthYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        commet: "Mês e ano de referência"

      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Descrição do valor gasto"
      },
      isFixedExpense: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Se é gasto fixo"
      },
      isCardExpense: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Se é gasto do cartão"
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Id da subcategoria",
        references: {
          model: TableNames.SUB_CATEGORY,
          key: 'id'
        }
      }
    },{
      comment: "Registro de todos os gastos mensais."
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};
