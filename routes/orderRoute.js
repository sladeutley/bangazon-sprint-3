'use strict';

const { Router } = require('express');

const router = Router();

const { getCurrentOrder } = require('../controllers/orderCtrl');

router.get('/currentOrder', getCurrentOrder);

module.exports = router;
