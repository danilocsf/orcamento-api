'use strict';

const TableNames = require('../../app/utils/constants').TableNames;
const TABLE_NAME = TableNames.CARD_TRANSACTION;
const CARD_TABLE_NAME = TableNames.CARD;

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
        comment: "Mês e ano de refeência"
      },
      totalValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Valor total da compra / estono"
      },
      numberOfparcels: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Número de parcelas da compra"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Informação sobre a compra"
      },
      cardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Id do cartão",
        references: {
          model: CARD_TABLE_NAME,
          key: 'id'
        }
      },
    },
    {
      comment: "Registro das transações dos cartões"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};