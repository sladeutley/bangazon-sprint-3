
'use strict';

const { Router } = require('express');

const router = Router();

const { getCurrentOrder, addProductToOrder, completeOrder } = require('../controllers/orderCtrl');


router.get('/orderdetail', getCurrentOrder);

router.post('/orderProduct/:id', addProductToOrder);

router.patch('/completeOrder', completeOrder);

module.exports = router;
