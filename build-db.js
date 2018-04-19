"use strict";

let models = require("./models");
let { products } = require('./seeders/products');

models.sequelize.sync({ force: true })
.then( () => {
  return models.Product.bulkCreate(products)
})
// Write bulkCreate functions here
.then( () => {
  process.exit();
});