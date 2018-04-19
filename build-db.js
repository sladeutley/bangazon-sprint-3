'use strict';

let models = require("./models");
let { paymentTypes } = require("./seeders/payment-types.json");


models.sequelize.sync({ force:true })
.then( () => {
  return models.PaymentType.bulkCreate(paymentTypes)
})
.then( () => {
  process.exit();
});