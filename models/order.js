'use strict';
module.export
s = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {}, {});
  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Order.hasOne(models.PaymentType, {
      foreignKey: "paymentTypeId"
    });
  };
  return Order;
};