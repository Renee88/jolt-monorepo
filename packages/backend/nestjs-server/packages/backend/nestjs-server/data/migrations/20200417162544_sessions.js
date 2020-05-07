
exports.up = function(knex) {
  return knex.schema.createTable('sessions',table => {
    table.string('id').primary();
    table.string('jolterID').notNull();
    table.string('talkID').notNull();
    table.string('roomID').notNull();
    table.string('date').notNull();
    table.string('hour').notNull();
    table.string('status').notNull();
    table.datetime('createdAt').defaultTo(knex.fn.now());
    table.foreign('jolterID').references('id').inTable('jolters');
    table.foreign('talkID').references('id').inTable('talks');
    table.foreign('roomID').references('id').inTable('rooms');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
