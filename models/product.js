'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    {
      tableName: 'products'
    }
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.ProductType, {
      foreignKey: 'productTypeId',
      onDelete: 'CASCADE'
    });
    Product.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Seller',
      onDelete: 'CASCADE'
    });
    Product.belongsToMany(models.Order, {
      through: 'OrderProduct'
    });
  };
  return Product;
};
