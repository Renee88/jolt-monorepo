
exports.up = function(knex) {
  return knex.schema.createTable('sessions',table => {
      table.string('id').notNull().primary();
      table.string('sessionRequestID').notNull();
      table.string('status').notNull();
      table.foreign('sessionRequestID').references('id').inTable('session_requests');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
