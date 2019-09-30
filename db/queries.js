const knex = require('./knex');

module.exports = {
  getAllProducts(){
      return knex('products')
  }
}