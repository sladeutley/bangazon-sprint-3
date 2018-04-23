module.exports.getCurrentOrder = (req, res) => {
  const { Order } = req.app.get('models');
  Order.findOne({
    where: {
      userId: req.user.id,
      paymentTypeId: null
    }
  })
    .then(order => {
      res.status(200).json(order);
    })
    .catch(err => {
      console.log('Something went wrong!', err);
      res.status(500).json({ error: err });
    })
}