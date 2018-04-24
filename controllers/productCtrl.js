'use strict';

// render form to add new product to DB
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

// get all of a user's products
module.exports.getProductsByUserId = (req, res, next) => {
  const { Product } = req.app.get('models');
  console.log('req', req);
  Product.findAll({
    where: {
      userId: req.user.id
    }
  })
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log('Something went wrong', err);
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
module.exports.displayProduct = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.findOne({
    raw: true,
    where: { id: req.params.id }
  })
    .then(product => {
      res.render('product', { product });
      next();
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

module.exports.postProduct = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    createdAt: null,
    updatedAt: null,
    productTypeId: req.body.productTypeId,
    userId: req.user.id
  })
    .then(product => {
      res.status(201).json(product);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};

module.exports.countProductsOrdered = (req, res, next) => {
  const { OrderProduct } = req.app.get('models');
  OrderProduct.count({
    where: {
      ProductId: req.params.id
    }
  })
    .then(products => {
      console.log(`${products} products have been ordered`);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
};
