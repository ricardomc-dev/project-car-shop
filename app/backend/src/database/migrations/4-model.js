module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('models', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      model_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'brands', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'groups', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('models');
  },
};
