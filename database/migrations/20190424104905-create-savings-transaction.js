'use strict';

const TransactionTypes = require('../../app/models/transactionTypeEnum');

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('savings_transaction', {
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
          model: 'savings',
          key: 'id'
        },
        comment: "Id da poupança"
      }
    },{
      comment: "registros das transações mensais da poupança",
    })
    .then(() => queryInterface.addConstraint('savings_transaction', ['transactionType'], {
      type: 'check',
      where: {
        transactionType: {
          [DataTypes.Op.in]: Object.values(TransactionTypes)
        }
      }
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('savings');
  }
};