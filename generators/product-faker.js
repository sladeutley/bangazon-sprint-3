"use strict";

const faker = require("faker");

module.exports.generateProducts = (typesLen, usersLen) => {
  let products = [];

  for (let i = 0; i < 25; i++) {
    let productTypeId = Math.floor(Math.random() * typesLen) + 1;
    let userId = Math.floor(Math.random() * usersLen) + 1;
    let name = faker.commerce.productName();
    let description = faker.lorem.sentence();
    let price = faker.commerce.price();
    let quantity = faker.random.number();

    products.push({
      productTypeId,
      userId,
      name,
      description,
      price,
      quantity
    });
  }
  return products;
};