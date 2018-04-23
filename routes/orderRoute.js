'use strict';

const { Router } = require('express');

const router = Router();

const { getCurrentOrder } = require('../controllers/orderCtrl');
const { addProductToOrder } = require('../controllers/orderProductCtrl');

router.get('/currentOrder', getCurrentOrder);
router.post('./orderProduct', addProductToOrder);

module.exports = router;
