"use strict";

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
