'use strict';

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
    res.status(500).json({ error: err});
  });
};
