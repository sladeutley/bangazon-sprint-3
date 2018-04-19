'use strict';

module.exports.generateOrders = () => {
  let orders = [];

  for (let i = 0; i < 15; i++) {
    let userId = i<5? i+1 :Math.floor(Math.random() * 5) + 1;
    let paymentTypeId = Math.floor(Math.random() * 10) + 1;
    orders.push({
      userId,
      paymentTypeId
    });
  }


  console.log(orders);
}