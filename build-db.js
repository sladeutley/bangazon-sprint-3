'use strict';

let models = require('./models');
let { productTypes } = require('./seeders/product-types');
let { paymentTypes } = require('./seeders/payment-types.json');
let { products } = require('./seeders/products');

models.sequelize
  .sync({ force: true })
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
    process.exit();
  });
