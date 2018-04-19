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
    let user_id = faker.random.number({ min: 1, max: 5 });
    console.log(payNum);

    paymentTypes.push({
      name,
      acct_num,
      user_id
    });
  }
  return { paymentTypes };
};


