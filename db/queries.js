const knex = require('./knex');

module.exports = {
  getAllProducts(query){
      
      let knexQuery = knex('products')

      if(query.color){
          knexQuery.where('color', query.color)
      }
      if(query.department){
          knexQuery.where('department', query.department)
      }
      if(query.productName){
          knexQuery.where('productName', 'like', `%${query.productName}%`)
      }
      if(query.price){
          knexQuery.orderBy('price', query.price)
      }

      return knexQuery
  },
  getOneProduct(id){
      return knex('products').where('id', id).first();
  },
  updateOneProduct(id, product){
      return knex('products').where('id',id).update(product, '*')
  }
}