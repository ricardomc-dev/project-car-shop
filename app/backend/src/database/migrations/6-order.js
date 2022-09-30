module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id',
        references: { model: 'users', key: 'id'},
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'seller_id',
        references: { model: 'users', key: 'id'},
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'vehicle_id',
        references: { model: 'vehicles', key: 'id'},
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
