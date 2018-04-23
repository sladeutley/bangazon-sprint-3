"use strict";

module.exports.addProductToOrder = (res, req, next) => {
  const { orderProduct } = req.app.get("models");

  //if req.user.id {
  orderProduct.create({

    OrderId: null,
    ProductId: null
  })
    .then(data => {
      console.log("new order-product", data);
      res.json(data);
    })
    .catch(err => {
      console.log("oopsies", err);
      res.status(500).json({ error: err });
    });
};

