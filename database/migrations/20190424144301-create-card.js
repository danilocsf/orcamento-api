'use strict';

const TABLE_NAME = 'card';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Número do cartão"
      },
      cardOwner: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Dono do cartão"
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "Se o cartão está ativo ou não"
      }
    },{
      comment: "Registro de todos os catões",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};