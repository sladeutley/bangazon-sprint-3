'use strict';

let models = require('./models');
let { users } = require('./seeders/users');
let { productTypes } = require('./seeders/producttypes');
let { paymentTypes } = require('./seeders/payment-types');
let { products } = require('./seeders/products');
let { orders } = require('./seeders/orders');

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.User.bulkCreate(users);
  })
  .then(() => {
    return models.ProductType.bulkCreate(productTypes);
  })
  .then(() => {
    return models.PaymentType.bulkCreate(paymentTypes);
  })
  .then(() => {
    return models.Product.bulkCreate(products);
  })
  .then(() => {
    return models.Order.bulkCreate(orders);
  })
  .then(() => {
    process.exit();
  });
