'use strict';
module.exports.getAllProducts() => {
app.get("/products", (req, res, next) => {
  Product.findAll({include: [{model: Show, attributes: ["name"]}]})
  .then( directors => {
    res.status(200).json(directors);
  })
  .catch((err) => {
    next(err);
  });
});
}