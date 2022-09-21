module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'brands',
      [
        {
          brand_name: 'BMW',
        },
        {
          brand_name: 'Chevrolet',
        },
        {
          brand_name: 'Fiat',
        },
        {
          brand_name: 'Ford',
        },
        {
          brand_name: 'Honda',
        },
        {
          brand_name: 'Hyundai',
        },
        {
          brand_name: 'Mercedes-Benz',
        },
        {
          brand_name: 'Renault',
        },
        {
          brand_name: 'Toyota',
        },
        {
          brand_name: 'Volkswagen',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('brands', null, {});
  },
};