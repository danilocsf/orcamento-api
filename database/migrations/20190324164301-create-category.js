'use strict';

const TableNames = require('../../app/utils/constants').TableNames;
const TABLE_NAME = TableNames.CATEGORY;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name :{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: "Nome da categoria"
      }
    },
    {
      comment: "Registro de todas as categorias"
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};