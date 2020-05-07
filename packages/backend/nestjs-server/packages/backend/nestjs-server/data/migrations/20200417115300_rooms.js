
exports.up = function(knex) {
  return knex.schema.createTable('rooms', table => {
      table.string('id').primary();
      table.string('name');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
};
