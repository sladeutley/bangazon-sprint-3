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
