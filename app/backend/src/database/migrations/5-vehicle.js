module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vehicles', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      license_plate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      chassi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renavam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'models', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'colors', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      mileage: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('vehicles');
  },
};
