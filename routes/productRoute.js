'use strict';

const { Router } = require('express');
const router = Router();

// product controller functions
const {
  getProductTypes,
  getProductById,
  getAllProducts,
  countProductsOrdered
} = require('../controllers/productCtrl.js');

// routes for product types
router.get('/prodTypes', getProductTypes);

//routes for products
router.get('/products/:id', getProductById, countProductsOrdered);
router.get('/products', getAllProducts);

module.exports = router;
