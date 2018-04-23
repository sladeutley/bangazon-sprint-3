'use strict';

const { Router } = require('express');
const router = Router();
const { postPaymentType, displayaddPaymentType } = require('../controllers/paymentTypeCtrl.js');

router.get('/addPayment', displayaddPaymentType);
router.post('/paymentTypes', postPaymentType);

module.exports = router;



