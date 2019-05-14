'use strict';

const TransactionTypes = require('../../app/utils/transactionTypeEnum');
const TableNames = require('../../app/utils/constants').TableNames;

const TABLE_NAME = TableNames.SAVINGS_TRANSACTION;
const SAVINGS_TABLE = TableNames.SAVINGS;

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      referenceMonthYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "Mês e ano de referência das transações"
      },
      monthYearValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Valor final contido na poupança no mês e ano de referência"
      },
      transactionDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        comment: "Data da transação"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Descrição para a transação"
      },
      transactionType: {
        type: DataTypes.STRING,
        allownull: false,
        comment: "Tipo da transação (depósito, retirada, juros)"
      },
      savingsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          //Nome da tabela
          model: SAVINGS_TABLE,
          key: 'id'
        },
        comment: "Id da poupança"
      }
    },{
      comment: "registros das transações mensais da poupança",
    })
    .then(() => queryInterface.addConstraint(TABLE_NAME, ['transactionType'], {
      type: 'check',
      where: {
        transactionType: {
          [DataTypes.Op.in]: Object.values(TransactionTypes)
        }
      }
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};