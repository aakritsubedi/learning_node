/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const tableName = "users";

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(() => {
      return knex(tableName).insert([
        {
          id: 1,
          fullname: "Aakrit Subedi",
          email: "aakritsubedi9@gmail.com",
          password: "415d7f0898b71b3132e0127ee11a7af6",
        },
        {
          id: 2,
          fullname: "Aakrit Subedi",
          email: "aakritsubedi@lftechnology.com",
          password: "415d7f0898b71b3132e0127ee11a7af6",
        },
      ]);
    });
}
