"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Provider_Payment_Options", {
         id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
               model: "Providers",
               key: "id",
            },
            primaryKey: true,
         },

         name: {
            type: Sequelize.STRING,
            primaryKey: true,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         deletedAt: {
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Provider_Payment_Options");
   },
};
