'use strict';

const { Router } = require('express');
const router = Router();

// product controller functions
const {
  displayProduct,
  getProductTypes,
  getAllProducts,
  getProductsByProdTypeId,
  deleteProduct,
  postProduct,
  displayProductForm,
  getProductsByUserId,
  countProductsOrdered,
  displayUserProductsPage
} = require('../controllers/productCtrl.js');

// routes for product types
router.get('/prodTypes', getProductTypes);
router.get('/prodTypes/:id', getProductsByProdTypeId);

//routes for products
router.get('/welcome', getAllProducts);
router.get('/productDelete/:id', deleteProduct);
router.get('/new-product', displayProductForm);
router.get('/products/:id', displayProduct, countProductsOrdered);
router.get('/products', getAllProducts);
router.post('/my-products', postProduct);
router.get('/my-products', getProductsByUserId);

module.exports = router;
