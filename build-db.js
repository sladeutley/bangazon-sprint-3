'use strict';

let models = require('./models');
let { productTypes } = require('./seeders/product-types');
let { products } = require('./seeders/products');

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
