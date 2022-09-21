module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'colors',
      [
        {
          color_name: 'Amarelo',
        },
        {
          color_name: 'Azul',
        },
        {
          color_name: 'Bege',
        },
        {
          color_name: 'Branca',
        },
        {
          color_name: 'Cinza',
        },
        {
          color_name: 'Dourada',
        },
        {
          color_name: 'Grená',
        },
        {
          color_name: 'Laranja',
        },
        {
          color_name: 'Marron',
        },
        {
          color_name: 'Prata',
        },
        {
          color_name: 'Preta',
        },
        {
          color_name: 'Rosa',
        },
        {
          color_name: 'Roxa',
        },
        {
          color_name: 'Verde',
        },
        {
          color_name: 'Vermelha',
        },
        {
          color_name: 'Fantasia',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('colors', null, {});
  },
};