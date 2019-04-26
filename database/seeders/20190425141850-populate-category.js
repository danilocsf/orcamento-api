'use strict';

const TableNames = require('../../app/utils/constants').TableNames;
const Ids = require('../../app/utils/constants').Ids;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.CATEGORY, [
      {
        id: Ids.CATEGORY_ALIMENTACAO,
        name: 'Alimentação'
      }, {
        id: Ids.CATEGORY_ROUPAS_CALCADOS_JOIAS,
        name: 'Roupas, calçados e acessórios'
      }, {
        id: Ids.CATEGORY_CUIDADOS_PESSOAIS,
        name: 'Cuidados pessoais'
      }, {
        id: Ids.CATEGORY_CASA,
        name: 'Casa'
      }, {
        id: Ids.CATEGORY_SAUDE,
        name: 'Saúde'
      }, {
        id: Ids.CATEGORY_ANIMAIS,
        name: 'Animais'
      }, {
        id: Ids.CATEGORY_VEICULOS,
        name: 'Veículos'
      }, {
        id: Ids.CATEGORY_TRANSPORTE,
        name: 'Transporte público e privado'
      }, {
        id: Ids.CATEGORY_ESTUDO,
        name: 'Estudos'
      }, {
        id: Ids.CATEGORY_LAZER,
        name: 'Lazer'
      }, {
        id: Ids.CATEGORY_CONTA,
        name: 'Contas'
      }, {
        id: Ids.CATEGORY_OUTROS,
        name: 'Outros'
      }, {
        id: CATEGORY_DOACAO,
        name: 'Doação'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
