module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'groups',
      [
        {
          group_name: 'Hatch',
        },
        {
          group_name: 'Sedan',
        },
        {
          group_name: 'Suv',
        },
        {
          group_name: 'Pick-up',
        },
        {
          group_name: 'Minivan',
        },
        {
          group_name: 'Perua',
        },
        {
          group_name: 'Furgão',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('groups', null, {});
  },
};