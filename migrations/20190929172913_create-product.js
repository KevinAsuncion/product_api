
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments();
      table.string('productName')
      table.string('department')
      table.string('color')
      table.decimal('price', 8, 2)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
