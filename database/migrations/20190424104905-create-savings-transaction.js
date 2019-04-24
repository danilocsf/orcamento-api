'use strict';

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
        default: new Date(),
        comment: "Data da transação"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Descrição para a transação"
      },
      type: {
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('savings');
  }
};