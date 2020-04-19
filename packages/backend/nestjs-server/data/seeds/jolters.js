const jolters = require('../../../Data/Users.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jolters').del()
    .then(function () {
      // Inserts seed entries
      return knex('jolters').insert(jolters);
    });
};
