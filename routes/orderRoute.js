'use strict';

const { Router } = require('express');

const router = Router();

const { getCurrentOrder, newOrder } = require('../controllers/orderCtrl');

router.get('/currentOrder', getCurrentOrder);

router.post('/orderAdd', newOrder);

module.exports = router;
