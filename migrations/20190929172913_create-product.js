
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments();
      table.string('productName')
      table.string('department')
      table.string('color')
      table.integer('price')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
