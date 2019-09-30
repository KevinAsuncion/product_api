
const faker = require('faker')

const createFakeProduct = () => ({
  productName: faker.commerce.productName(),
  department: faker.commerce.department(),
  color: faker.commerce.color(),
  price: faker.commerce.price()
})

const createFakeProductList =() => {
  const fakeProductList = []; 
  for (let i = 0; i < 30; i++){
    fakeProductList.push(createFakeProduct())
  }
  return fakeProductList
}

exports.seed = function(knex) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert(createFakeProductList());
    });
};
