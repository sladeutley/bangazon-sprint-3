'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {}, { tableName: 'orders' });
  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Order.hasOne(models.PaymentType, {
      foreignKey: 'paymentTypeId'
    });
  };
  return Order;
};
