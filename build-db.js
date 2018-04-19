"use strict";

let models = require("./models");

models.sequelize.sync({ force: true })
  // Write bulkCreate functions here
  .then(() => {
    process.exit();
  });