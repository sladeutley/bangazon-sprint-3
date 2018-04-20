'use strict'

const { Router } = require('express');
const router = Router();

const { getUserPaymentTypes } = require('../controllers/paymentTypeCtrl.js');

router.get('/currentOrder', getUserPaymentTypes);

module.exports = router;