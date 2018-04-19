"use strict";

let models = require("./models");
let { orders } = require('./seeders/orders')
models.sequelize.sync({ force: true })
  // Write bulkCreate functions here
  .then(() => {
    return models.Order.bulkCreate(orders);

    process.exit();
  });