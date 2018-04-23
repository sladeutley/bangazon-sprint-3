'use strict';

// get all product types
module.exports.getProductTypes = (req, res, next) => {
  const { ProductType } = req.app.get('models');

  ProductType.findAll()
    .then(productTypes => {
      res.status(200).json(productTypes);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

// get all products
module.exports.getAllProducts = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.findAll()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

// get a product by its ID
module.exports.getProductById = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.findOne({
    raw: true,
    where: { id: req.params.id }
  })
    .then(product => {
      res.status(200).json(product);
      next();
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

// count the amount of times a single product has been ordered
module.exports.countProductsOrdered = (req, res, next) => {
  const { OrderProduct } = req.app.get('models');
  OrderProduct.count({
    where: {
      ProductId: req.params.id
    }
  }).then(products => {
    console.log(`${products} products have been ordered`);
  })
  .catch(err => {
    console.log('Something went wrong!', err);
    res.status(500).json({ error: err });
  });
}