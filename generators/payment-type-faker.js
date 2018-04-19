"use strict";

const faker = require("faker");

module.exports.generatePaymentTypes = () => {
  let paymentTypes = [];
  let paymentTypeArr = ["Visa", "Amex", "Master Card"];
  let payNum;
  for (let i = 0; i < 10; i++) {
    payNum = Math.floor(Math.random() * paymentTypeArr.length);
    let name =  paymentTypeArr[payNum];
    let acct_num = faker.finance.account();
    let userId = faker.random.number({ min: 1, max: 5 });
    paymentTypes.push({
      name,
      acct_num,
      userId
    });
  }
  return { paymentTypes };
};


