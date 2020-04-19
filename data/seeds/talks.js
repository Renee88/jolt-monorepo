const talks = require('../../../Data/Talks.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('talks').del()
    .then(function () {
      // Inserts seed entries
      return knex('talks').insert(talks);
    });
};
