/**
 * Create table `links`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('links', table => {
    table.increments();
    table.string('title').notNull();
    table.string('url').notNull();
    table.string('image_url').notNull();
    table.string('user_id').notNull();
    table.string('created_by').notNull();
    table.string('update_by').notNull();
    table.string('description').notNull();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));

  });
}

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('links');
}
