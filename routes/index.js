'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./productRoute'));
router.use(require('./paymentTypeRoute'));
router.use(require('./orderRoute'));

module.exports = router;
