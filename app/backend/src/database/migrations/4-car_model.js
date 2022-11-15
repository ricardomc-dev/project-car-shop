module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('car_models', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      carModelName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'car_model_name',
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'brand_id',
        references: { model: 'brands', key: 'id' },
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'group_id',
        references: { model: 'groups', key: 'id'},
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING(200),
        field: 'url_image',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('car_models');
  },
};
