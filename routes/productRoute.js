'use strict';

const { Router } = require('express');
const router = Router();

// product controller functions
const {
  displayProduct,
  getProductTypes,
  getProductById,
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

router.get('/products', getAllProducts);
router.get('/productDelete/:id', deleteProduct);
router.post('/productAdd', postProduct);
router.get('/new-product', displayProductForm);
router.get('/products/:id', displayProduct, countProductsOrdered);
router.get('/products', getAllProducts);
router.get('/my-products', getProductsByUserId);

module.exports = router;
