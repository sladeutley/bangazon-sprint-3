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
  countProductsOrdered
} = require('../controllers/productCtrl.js');

// routes for product types
router.get('/prodTypes', getProductTypes);
router.get('/prodTypes/:id', getProductsByProdTypeId);

//routes for products
router.get('/welcome', getAllProducts);
router.get('/productDelete/:id', deleteProduct);
router.post('/productAdd', postProduct);
router.get('/new-product', displayProductForm);
router.get('/products/:id', displayProduct, countProductsOrdered);
router.get('/userProducts', getProductsByUserId);

module.exports = router;
