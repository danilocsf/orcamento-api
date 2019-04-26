'use strict';

const TableNames = require('../../app/utils/constants').TableNames;
const ids = require('../../app/utils/constants').Ids;
let i = -1;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.SUB_CATEGORY, [
      {
        id: i--,
        name: 'Supermercado',
        categoryId: ids.CATEGORY_ALIMENTACAO
      },
      {
        id: i--,
        name: 'Restaurante',
        categoryId: ids.CATEGORY_ALIMENTACAO
      },
      {
        id: i--,
        name: 'Pizza',
        categoryId: ids.CATEGORY_ALIMENTACAO
      },
      {
        id: i--,
        name: 'Padaria',
        categoryId: ids.CATEGORY_ALIMENTACAO
      },
      {
        id: i--,
        name: 'Marmitex',
        categoryId: ids.CATEGORY_ALIMENTACAO
      },
      {
        id: i--,
        name: 'Roupa',
        categoryId: ids.CATEGORY_ROUPAS_CALCADOS_JOIAS
      },
      {
        id: i--,
        name: 'Calçado',
        categoryId: ids.CATEGORY_ROUPAS_CALCADOS_JOIAS
      },
      {
        id: i--,
        name: 'Jóia/Bijuteria',
        categoryId: ids.CATEGORY_ROUPAS_CALCADOS_JOIAS
      },
      {
        id: i--,
        name: 'Academia',
        categoryId: ids.CATEGORY_CUIDADOS_PESSOAIS
      },
      {
        id: i--,
        name: 'Cabelereiro',
        categoryId: ids.CATEGORY_CUIDADOS_PESSOAIS
      },
      {
        id: i--,
        name: 'Manicure',
        categoryId: ids.CATEGORY_CUIDADOS_PESSOAIS
      },
      {
        id: i--,
        name: 'Massagem',
        categoryId: ids.CATEGORY_CUIDADOS_PESSOAIS
      },
      {
        id: i--,
        name: 'Reparo',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Móvel',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Eletrodoméstico',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Eletrônico',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Ferramenta e material de construção',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Tinta',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Cama, mesa e banho',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Utensílios e acessórios em geral',
        categoryId: ids.CATEGORY_CASA
      },
      {
        id: i--,
        name: 'Remédio',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Médico',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Psicólogo',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Nutricionista',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Exame',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Dentista',
        categoryId: ids.CATEGORY_SAUDE
      },
      {
        id: i--,
        name: 'Ração',
        categoryId: ids.CATEGORY_ANIMAIS
      },
      {
        id: i--,
        name: 'Veterinário',
        categoryId: ids.CATEGORY_ANIMAIS
      },
      {
        id: i--,
        name: 'Remédio',
        categoryId: ids.CATEGORY_ANIMAIS
      },
      {
        id: i--,
        name: 'Brinquedo',
        categoryId: ids.CATEGORY_ANIMAIS
      },
      {
        id: i--,
        name: 'Banho/Tosa',
        categoryId: ids.CATEGORY_ANIMAIS
      },
      {
        id: i--,
        name: 'Revisão',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Seguro',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Troca de óleo',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Reparos inesperados',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'IPVA',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Seguro obrigatório',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Taxa de licenciamento',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Gasolina',
        categoryId: ids.CATEGORY_VEICULOS
      },
      {
        id: i--,
        name: 'Ônibus',
        categoryId: ids.CATEGORY_TRANSPORTE
      },
      {
        id: i--,
        name: 'Avião',
        categoryId: ids.CATEGORY_TRANSPORTE
      },
      {
        id: i--,
        name: 'Taxi/Uber',
        categoryId: ids.CATEGORY_TRANSPORTE
      },
      {
        id: i--,
        name: 'Curso',
        categoryId: ids.CATEGORY_ESTUDO
      },
      {
        id: i--,
        name: 'Material',
        categoryId: ids.CATEGORY_ESTUDO
      },
      {
        id: i--,
        name: 'Viagem',
        categoryId: ids.CATEGORY_LAZER
      },
      {
        id: i--,
        name: 'Bar/Restaurante',
        categoryId: ids.CATEGORY_LAZER
      },
      {
        id: i--,
        name: 'Cinema/Teatro',
        categoryId: ids.CATEGORY_LAZER
      },
      {
        id: i--,
        name: 'Show',
        categoryId: ids.CATEGORY_LAZER
      },
      {
        id: i--,
        name: 'Água',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Aluguel',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Condomínio',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Gás',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Internet',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Telefone/Celular',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Luz',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Prestação apartamento',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'IPTU',
        categoryId: ids.CATEGORY_CONTA
      },
      {
        id: i--,
        name: 'Correios',
        categoryId: ids.CATEGORY_OUTROS
      },
      {
        id: i--,
        name: 'Cartório',
        categoryId: ids.CATEGORY_OUTROS
      },
      {
        id: i--,
        name: 'Renovação de CNH',
        categoryId: ids.CATEGORY_OUTROS
      },
      {
        id: i--,
        name: 'Taxa bancária',
        categoryId: ids.CATEGORY_OUTROS
      },
      {
        id: i--,
        name: 'Família',
        categoryId: ids.CATEGORY_DOACAO
      },
      {
        id: i--,
        name: 'Caridade',
        categoryId: ids.CATEGORY_DOACAO
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
