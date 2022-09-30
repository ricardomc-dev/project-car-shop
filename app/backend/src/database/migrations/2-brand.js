module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('brands', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      brandName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'brand_name',
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('brands');
  },
};
