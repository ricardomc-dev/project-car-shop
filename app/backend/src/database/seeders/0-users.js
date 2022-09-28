module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          name: "Car Shop Admin",
          email: "admin@carshop.com",
          password: "admin1234",
          role: "administrator"
        }, 
        {
          name: "Edson Nascimento",
          email: "pele@carshop.com",
          password: "seller1234",
          role: "seller"
        }, 
        {
          name: "Ayrton Senna",
          email: "senna@gmail.com",
          password: "customer1234",
          role: "customer"
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};