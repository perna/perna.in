'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Link', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      original_url: {
        type: Sequelize.STRING
      },
      short_url: {
        type: Sequelize.STRING
      },
      public: {
        type: Sequelize.BOOLEAN
      },
      click: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
    freezeTableName: true
  });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Links');
  }
};