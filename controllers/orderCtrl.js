
module.exports.getCurrentOrder = (req, res) => {
  const { Order, PaymentType } = req.app.get('models');
  let payments;
  //find all payment types for user
  PaymentType.findAll({
    where: {
      userId: req.user.id
    }
  }).then(types => {
    payments = types.map(type => { return { number: type.id, name: type.name, account: type.acct_num } })
  })
  //find current open order
  Order.findOne({
    where: {
      userId: req.user.id,
      paymentTypeId: null
    }
  }).then(order => {
    res.render('order', { order, payments });
  })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    });
}

module.exports.newOrder = (req, res) => {
  const { Order } = req.app.get('models');

  Order.create({
    userId: req.user.id,
    paymentTypeId: null
  })
    .then(newOrder => {
      res.status(201).json(newOrder);
    }).catch((err) => {
      next(err);
    })
}

//get find current order if it exists, if not create a new one, and create new orderProduct with orderId
module.exports.addProductToOrder = (req, res, next) => {
  const { OrderProduct, Order } = req.app.get("models");
  Order.findOrCreate({
    where: {
      userId: req.user.id,
      paymentTypeId: null
    }
  }).then(currentOrder => {
    res.json(currentOrder);
    OrderProduct.create({
      orderId: currentOrder[0].id,
      productId: req.params.id
    })
  }).then(newOrdProd => {
    res.status(201).json(newOrdProd)
  })
    .catch(err => {
      console.log("oopsies", err);
      res.status(500).json({ error: err });
    });
};

// get current order, and update with selected payment type
module.exports.completeOrder = (req, res, next) => {
  const { Order } = req.app.get('models');
  Order.findOne({
    where: {
      userId: req.user.id,
      paymentTypeId: null
    }
  }).then(order => {
    order.updateAttributes({ paymentTypeId: req.body.paymentType })
  })
    .catch(err => {
      console.log('NEWP, AINT GONNA WORK');
      res.status(500).json({ error: err });
    })
};

