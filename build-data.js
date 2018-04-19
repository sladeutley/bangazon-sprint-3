'use strict';

const { createWriteStream } = require('fs');
const { generatePaymentTypes} = require('./generators/payment-type-faker');


let paymentTypes = generatePaymentTypes();
let paymentTypeStream = createWriteStream('./seeders/payment-types.json'); ;
paymentTypeStream.write(JSON.stringify(paymentTypes));

