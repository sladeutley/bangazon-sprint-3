'use strict';

let models = require("./models");

let { orders } = require('./seeders/orders')
let { paymentTypes } = require("./seeders/payment-types.json");
let { products } = require('./seeders/products');


models.sequelize.sync({ force:true })
.then( () => {
  return models.PaymentType.bulkCreate(paymentTypes)
})
.then( () => {
  return models.Product.bulkCreate(products)
})
then(() => {
  return models.Order.bulkCreate(orders);
})
.then( () => {
  process.exit();
});

