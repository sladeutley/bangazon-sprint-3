'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    name: DataTypes.STRING,
    acct_num: DataTypes.INTEGER
  }, {tableName: "payment-types", timestamps: false});
  PaymentType.associate = function(models) {
    foreignKey: "userId"
  };
  return PaymentType;
};