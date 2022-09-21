module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          name: "Car Shop Admin",
          email: "adm@carshop.com",
          password: "adm2@22",
          role: "administrator"
        }, 
        {
          name: "Fulana Silva",
          email: "fulana@carshop.com",
          password: "fulana@123",
          role: "seller"
        }, 
        {
          name: "Cliente Maria Gasolina",
          email: "mgasolina@email.com",
          password: "$#gas#$",
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