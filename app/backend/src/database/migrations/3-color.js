module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('colors', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      colorName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'color_name',
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('colors');
  },
};
