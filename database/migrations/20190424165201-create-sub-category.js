'use strict';

const TableNames = require('../../app/utils/constants');
const TABLE_NAME = TableNames.SUB_CATEGORY;
const CATEGORY_TABLE_NAME = TableNames.CATEGORY;

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name :{
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Nome da sub categoria"
      },
      categoryId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Id da categoria",
        references: {
          //Nome da tabela
          model: CATEGORY_TABLE_NAME,
          key: 'id'
        }
      }
    },
    {
      comment: "Registro de todas as sub categorias"
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};