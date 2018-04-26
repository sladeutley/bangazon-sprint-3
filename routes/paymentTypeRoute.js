'use strict';

const { Router } = require('express');
const router = Router();
const {
  postPaymentType,
  displayaddPaymentType
} = require('../controllers/paymentTypeCtrl.js');
const { getUserPaymentTypes } = require('../controllers/paymentTypeCtrl.js');

router.get('/addPayment', displayaddPaymentType);
router.post('/paymentTypes', postPaymentType);
router.get('/currentOrder/paymentType', getUserPaymentTypes);

module.exports = router;
