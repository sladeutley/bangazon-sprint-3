'use strict';

const { Router } = require('express');
const router = Router();

// product controller functions
const {
  getProductTypes,
  getProductById,
  getAllProducts,
  getProductsByUserId
} = require('../controllers/productCtrl.js');

// routes for product types
router.get('/prodTypes', getProductTypes);

//routes for products
router.get('/products/:id', getProductById);
router.get('/products', getAllProducts);
router.get('/userProducts', getProductsByUserId);

module.exports = router;
