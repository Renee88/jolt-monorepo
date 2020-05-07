exports.up = function(knex, promise) {
  return knex.schema.createTable("jolters", table => {
      table.string('id').primary();
      table.string('name').notNull();
      table.string('picture');
      table.string('email').notNull();
      table.integer('age');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('jolters');
};
