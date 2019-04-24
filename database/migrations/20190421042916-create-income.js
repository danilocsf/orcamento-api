'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('income_record', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      expectedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        comment: "Valor esperado a ser recebido no mês/ano de referência"
      },
      receivedValue: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
        comment: "Valor de fato recebido durante o mês/ano de referência"
      },
      referenceMonthYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "Mês e ano de referência"
      },
      dateOfReceipt: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "Quando o valor deveria ser/foi recebido"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Descrição do valor (salario, ferias, horas extras, etc)"
      },
      onlyCurrentMonth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Se o valor deverá ser recebido somente no mês atual ou se é permanente"
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
      comment: "Registro de todas as rendas fixas e mensais."
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('income_record');
  }
};
