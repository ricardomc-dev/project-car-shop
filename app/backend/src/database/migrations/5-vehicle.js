module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vehicles', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      licensePlate: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'license_plate',
      },
      chassi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renavam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      carModelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'car_model_id',
        references: { model: 'car-models', key: 'id' },
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'color_id',
        references: { model: 'colors', key: 'id'},
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
