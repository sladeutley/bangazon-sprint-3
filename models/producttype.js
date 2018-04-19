'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductType = sequelize.define(
    'ProductType',
    {
      name: DataTypes.STRING
    },
    { tableName: 'product_types', timestamps: false }
  );
  ProductType.associate = function(models) {
    // associations can be defined here
    ProductType.hasMany(models.Product, {
      foreignKey: 'productTypeId'
    });
  };
  return ProductType;
};
