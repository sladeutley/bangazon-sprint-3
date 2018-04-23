'use strict';

module.exports.displayProductForm = (req, res) => {
  res.render('new-product');
};
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

// get a list of products that match product type ID
module.exports.getProductsByProdTypeId = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.findAll({
    raw: true,
    where: { productTypeId: req.params.id }
  })
    .then(products => {
      res.status(200).json(products);
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
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

// delete product from DB
module.exports.deleteProduct = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.destroy({
    where: { id: req.params.id }
  })
    .then(product => {
      res.status(204).json(product);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

// post product to DB
module.exports.postProduct = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.create(req.body)
    .then(product => {
      res.status(201).json(product);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};
