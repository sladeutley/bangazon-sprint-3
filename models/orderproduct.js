'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderProduct = sequelize.define(
    'OrderProduct',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      } 
    },
    {}
  );
  OrderProduct.associate = function(models) {
    // associations can be defined here
  };
  return OrderProduct;
};
