'use strict';

const { createWriteStream } = require('fs');
const { generatePaymentTypes} = require('./generators/payment-type-faker');
const { generateProducts } = require('./generators/product-faker.js');

// payment types
let paymentTypes = generatePaymentTypes();
let paymentTypeStream = createWriteStream('./seeders/payment-types.json'); ;
paymentTypeStream.write(JSON.stringify(paymentTypes));

// products
let products = generateProducts(10, 5);
let prodStream = createWriteStream(`seeders/products.json`);
prodStream.write(JSON.stringify(products));
