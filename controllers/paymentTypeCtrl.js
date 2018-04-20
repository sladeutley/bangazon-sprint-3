"use strict";

module.exports.getUserPaymentTypes = (req, res, next) => {
  const { User, PaymentType } = req.app.get("models");

  // PaymentType.findAll()
  //   .then(paymentTypes => {
  //     res.status(200).json(paymentTypes);
  //   })
  req.user.id
    .catch(err => {
      console.log("oopsies", err);
      res.status(500).json({ error: err });
    });
};
