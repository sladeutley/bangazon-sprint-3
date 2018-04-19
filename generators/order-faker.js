'use strict';

const faker = require("faker");

module.exports.generateOrders = () => {
  let orders = [];

  for (let i = 0; i < 15; i++) {
    let userId = faker.random.number({ min: 1, max: 5 });
    let paymentTypeId = Math.floor(Math.random() * 10) + 1;
    orders.push({
      userId,
      paymentTypeId
    });
  }
  return { orders };

}
