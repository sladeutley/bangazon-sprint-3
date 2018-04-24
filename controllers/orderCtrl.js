
module.exports.getCurrentOrder = (req, res) => {
  const { Order, PaymentType } = req.app.get('models');
  let payments;

  PaymentType.findAll({
    where: {
      userId: req.user.id
    }
  }).then(types => {
    payments = types.map(type => { return { number: type.id, name: type.name, account: type.acct_num } })
  })

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

module.exports.completeOrder = (req, res, next) => {
  const { Order } = req.app.get('models');
  console.log(req.params, 'req params')
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

