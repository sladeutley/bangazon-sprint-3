'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, 
  {
   tableName: "products",
   timestamps: false
  });
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.ProductType, {
      foreignKey: "prod_typeId",
      onDelete: "CASCADE"
    });

    Product.belongsTo(models.User, {
      foreignKey: "customerId",
      onDelete: "CASCADE"
    });
  };
  return Product;
};