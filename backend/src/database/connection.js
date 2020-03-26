const knex = require('knex');
const configuration = require("../../knexfile") // ../ volta uma pasta para trás

const connection = knex(configuration.development);

module.exports = connection