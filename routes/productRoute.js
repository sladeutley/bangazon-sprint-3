'use strict';

const { Router } = require('express');
const router = Router();

// product controller functions
const {
  getProductTypes,
  getProductById,
  getAllProducts,
  getProductsByProdTypeId
} = require('../controllers/productCtrl.js');

// routes for product types
router.get('/prodTypes', getProductTypes);
router.get('/prodTypes/:id', getProductsByProdTypeId);

//routes for products
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

module.exports = router;
