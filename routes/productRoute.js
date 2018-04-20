'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes } = require('../controllers/productCtrl.js');

router.get('/prodTypes', getProductTypes);

module.exports = router;
