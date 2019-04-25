'use strict';

const constants = require('../../app/utils/constants');
const TABLE_NAME = constants.TableNames.SUB_CATEGORY;
const CATEGORY_TABLE_NAME = constants.TableNames.CATEGORY;

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
        comment: "Nome da sub categoria"
      },
      categoryId :{
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Id da categoria",
        references: {
          model: CATEGORY_TABLE_NAME,
          key: 'id'
        }
      }
    },
    {
      comment: "Registro de todas as sub categorias"
    })
    .then(() =>
      queryInterface.addConstraint(TABLE_NAME, ['name', 'categoryId'],
        {
          type: 'unique',
          name: constants.TableConstraints.UNIQUE_SUB_CATEGORY
        }
      )
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TABLE_NAME);
  }
};