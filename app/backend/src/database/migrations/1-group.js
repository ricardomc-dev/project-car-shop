module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      groupName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'group_name',
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('groups');
  },
};
