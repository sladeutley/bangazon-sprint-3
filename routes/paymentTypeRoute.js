'use strict'

const { Router } = require('express');
const router = Router();

const { getUserPaymentTypes } = require('../controllers/paymentTypeCtrl.js');

// router.get('/currentOrder', getUserPaymentTypes);
router.get('/currentOrder/paymentType', getUserPaymentTypes);

module.exports = router;