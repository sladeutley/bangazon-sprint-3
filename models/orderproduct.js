"use strict";
module.exports = (sequelize, DataTypes) => {
  var OrderProduct = sequelize.define(
    "OrderProduct",
    {},
    { tableName: "order_product" }
  );
  OrderProduct.associate = function(models) {
    // associations can be defined here
  };
  return OrderProduct;
};
