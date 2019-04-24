'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('savings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Número da poupança"
      },
      currentValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Valor atual da poupança"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Uma descrição para a poupança"
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "Se a poupança está ativa ou não"
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
      comment: "Registro de todas as poupanças",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('savings');
  }
};