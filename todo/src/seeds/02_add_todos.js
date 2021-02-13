/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const tableName = "todos";

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(() => {
      return knex(tableName).insert([
        {
          title: "Complete Node.js application",
          description:
            "Prepare Node.js application and share with 30th intern batch",
          date: "02-13-2021",
          user_id: 1,
          status: 0,
        },
        {
          title: "Complete React.js application",
          description:
            "Prepare React.js application and share with 30th intern batch",
          date: "02-18-2021",
          user_id: 2,
          status: 1,
        },
      ]);
    });
}
