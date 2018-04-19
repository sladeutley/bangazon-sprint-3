'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    name: DataTypes.STRING,
    acct_num: DataTypes.INTEGER
  }, {timestamps: false});
  PaymentType.associate = function(models) {
    foreignKey: "userId"
  };
  return PaymentType;
};