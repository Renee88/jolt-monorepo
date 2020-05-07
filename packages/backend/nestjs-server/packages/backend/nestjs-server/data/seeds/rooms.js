const rooms = require('../../../Data/Rooms.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert(rooms);
    });
};
