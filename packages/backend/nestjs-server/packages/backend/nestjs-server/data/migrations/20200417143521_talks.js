
exports.up = function(knex) {
  return knex.schema.createTable('talks', table => {
      table.string('id').primary();
      table.string('name').notNull();
      table.text('transcript');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('talks')
};