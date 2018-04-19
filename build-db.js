'use strict';

let models = require('./models');
let { productTypes } = require('./seeders/product-types');

models.sequelize.sync({ force: true }).then(() => {
  return models.ProductType.bulkCreate(productTypes);
});
