"use strict";
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define("Order", {}, { tableName: "orders" });
  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Order.belongsTo(models.PaymentType, {
      foreignKey: "paymentTypeId"
    });
    Order.belongsToMany(models.Product, {
      through: "order_product"
    });
  };
  return Order;
};
