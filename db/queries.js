const knex = require('./knex');

module.exports = {
  getAllProducts(){
      return knex('products')
  },
  getOneProduct(id){
      return knex('products').where('id', id).first();
  }
  
}