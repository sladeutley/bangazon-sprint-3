'use strict';

// render form to add new product to DB
module.exports.displayProductForm = (req, res) => {
  res.render('new-product');
};

// get all product types
module.exports.getProductTypes = (req, res, next) => {
  const { ProductType } = req.app.get('models');
  ProductType.findAll()
  .then(prodTypes => {
    let categories = [];
    prodTypes.forEach(type => {
      countProductsInType(req, res, type.id)
      .then(prodNum => {
        console.log(type.name, prodNum );
        categories.push(
          {
            id: type.id,
            name: type.name,
            count: prodNum
          }
        )
      });
    });
    console.log('CATEGORIES', categories);
    setTimeout(function(){res.render('categories', { categories })}, 300);
  })
  .catch(err => {
    console.log('Something went wrong!', err);
  });
};

const countProductsInType = (req, res, id) => {
  const { Product } = req.app.get('models');
  return new Promise((resolve, reject) => {
    Product.count({
      where: {
        productTypeId: id
      }
    })
    .then(prodNum => {
      resolve(prodNum);
    })
    .catch(error => {
      console.log('error', error);
    });
  });
}

// get a list of products that match product type ID
module.exports.getProductsByProdTypeId = (req, res, next) => {
  const { Product } = req.app.get('models');

  Product.findAll({
    raw: true,
    where: { productTypeId: req.params.id }
  })
    .then(products => {
      res.render('category-prods', { products });
    })
    .catch(err => {
      console.log('Something went wrong!', err);
    });
};

// get all of a user's products
module.exports.getProductsByUserId = (req, res, next) => {
  const { Product } = req.app.get('models');
  let userProducts;
  Product.findAll({
    where: {
      userId: req.user.id
    }
  })
    .then(products => {
      userProducts = products.map(product => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity
        };
      });
      res.render('my-products', { userProducts });
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
      res.render('welcome', { products });
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
      res.redirect('/my-products');
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
      res.redirect('/my-products');
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
      productId: req.params.id
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
