'use strict';

const TableNames = require('../../app/utils/constants').TableNames;
const category = require('../../app/models/category');
const subCategory = require('../../app/models/subCategory');
var Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      category.create({
        name: 'ALIMENTAÇÃO',
        subCategories: [{
            name: "SUPERMERCADO",
          }, {
            name: 'RESTAURANTE',
          }]}, {
          include: [ subCategory]
        }
      ),
      category.create({
        name: 'SAUDE',
        subCategories: [{
            name: "TESTE",
          }, {
            name: 'TEST2',
          }]}, {
          include: [ subCategory]
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
