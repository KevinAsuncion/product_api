const knex = require('./knex');

module.exports = {
  getAllProducts(){
      return knex('products')
  },
  getOneProduct(id){
      return knex('products').where('id', id).first();
  },
  updateOneProduct(id, product){
      return knex('products').where('id',id).update(product, '*')
  }
}