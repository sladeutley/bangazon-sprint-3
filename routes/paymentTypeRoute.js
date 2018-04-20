'use strict';

const { Router } = require('express');
const router = Router();
const { postPaymentType } = require('../controllers/paymentTypeCtrl.js');


router.post('/paymentTypes', postPaymentType);

module.exports = router;



