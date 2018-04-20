'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes, getProductsByUserId } = require('../controllers/productCtrl.js');

router.get('/prodTypes', getProductTypes);
router.get('/myProducts', getProductsByUserId);

module.exports = router;
