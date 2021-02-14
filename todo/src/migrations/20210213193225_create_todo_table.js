/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const tableName = "todos";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary().unsigned();

    table.string("title").notNull();
    table.text("description");
    table.date("date");
    table.integer("user_id");
    table.integer("status").defaultTo(0);

    table.timestamp("created_at").notNull().defaultTo(knex.raw("now()"));
    table.timestamp("updated_at").notNull().defaultTo(knex.raw("now()"));
  });
}

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable("table_name");
}
