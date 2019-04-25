'use strict';
const TableNames = require('../../app/utils/constants').TableNames;

const TABLE_NAME = TableNames.FIXED_EXPENSE;

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
        comment: "Mês e ano de referência"
      },     
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Descrição do valor a ser gasto"
      },
      numberOfMonths: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "Número de meses, caso o valor seja fixo por alguns meses, a partir da data de criação"
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Id da subcategoria",
        references: {
          model: model.SubCategory,
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        comment: "Data de criação do registro"
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        comment: "Data da última alteração do registro"
      }
    },{
      comment: "Registro de todos os gastos fixos."
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};
