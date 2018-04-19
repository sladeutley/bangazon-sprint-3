'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define(
    'PaymentType',
    {
      name: DataTypes.STRING,
      acct_num: DataTypes.INTEGER
    },
    { tableName: 'payment-types', timestamps: false }
  );
  PaymentType.associate = function(models) {
    PaymentType.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    PaymentType.belongsTo(models.Order, {
      foreignKey: 'paymentTypeId'
    });
  };
  return PaymentType;
};
