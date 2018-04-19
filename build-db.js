'use strict';

let models = require('./models');
let { productTypes } = require('./seeders/product-types');

models.sequelize
  .sync({ force: true })
  // Write bulkCreate functions here
  .then(() => {
    return models.ProductType.bulkCreate(productTypes);
  })
  .then(() => {
    process.exit();
  });
