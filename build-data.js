
'use strict';

const { createWriteStream } = require('fs');

const { generateOrders } = require('./generators/order-faker');
const { generatePaymentTypes} = require('./generators/payment-type-faker');
const { generateProducts } = require('./generators/product-faker.js');

let orders = generateOrders();
let orderStream = createWriteStream('./seeders/orders.json');
orderStream.write(JSON.stringify(orders));

// payment types
let paymentTypes = generatePaymentTypes();
let paymentTypeStream = createWriteStream('./seeders/payment-types.json'); ;
paymentTypeStream.write(JSON.stringify(paymentTypes));

// products
let products = generateProducts(10, 5);
let prodStream = createWriteStream(`seeders/products.json`);
prodStream.write(JSON.stringify(products));
