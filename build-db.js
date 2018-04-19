'use strict';

let models = require('./models');
let { products } = require('./seeders/products');
let { productTypes } = require('./seeders/product-types');

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.ProductType.bulkCreate(productTypes);
  })
  .then(() => {
    return models.Product.bulkCreate(products);
  })
  // Write bulkCreate functions here
  .then(() => {
    process.exit();
  });
