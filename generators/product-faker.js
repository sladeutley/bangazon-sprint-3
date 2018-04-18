"use strict";

const faker = require("faker");

module.exports.generateProducts = (typesLen, customersLen) => {
  let products = [];

  for (let i = 0; i < 25; i++) {
    let prod_typeId = Math.floor(Math.random() * typesLen) + 1;
    let customerId = Math.floor(Math.random() * customersLen) + 1;
    let name = faker.commerce.productName();
    let description = faker.lorem.sentence();
    let price = faker.commerce.price();
    let quantity = faker.random.number();

    products.push({
      prod_typeId,
      customerId,
      name,
      description,
      price,
      quantity
    });
  }
  return products;
};