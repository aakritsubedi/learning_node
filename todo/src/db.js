const knexJs = require('knex');
const knexConfig = require('./knexfile');

const knex = knexJs(knexConfig);

module.exports = knex;
