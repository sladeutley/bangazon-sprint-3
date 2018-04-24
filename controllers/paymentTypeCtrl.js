
'use strict';

module.exports.displayaddPaymentType = (req, res) => {
  res.render('addPayment');
};

module.exports.postPaymentType = (req, res, next) => {
  const models = req.app.get('models');
  const { PaymentType } = models;
  PaymentType.create({
    name: req.body.name,
    acct_num: req.body.acct_num,
    userId: req.user.id
  }).then(data => {
    console.log('new payment type = ', data);
    res.json(data);
  })
  .catch(err => {
    res.status(500).json({ "error": err });
  })
};

module.exports.getUserPaymentTypes = (req, res, next) => {
  // module.exports.getUserPaymentTypes = ({user: id}, res, next) => {
  const { PaymentType } = req.app.get("models");

  PaymentType.findAll({
    where: {
      userId: req.user.id
    }
  })
    .then(paymentTypes => {
      res.status(200).json(paymentTypes);
    })
    .catch(err => {
      console.log("oopsies", err);
      res.status(500).json({ error: err });
    });
};
