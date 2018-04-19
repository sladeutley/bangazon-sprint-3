
'use strict';

const { createWriteStream } = require('fs');

const { generateOrders } = require('./generators/order-faker');

let orders = generateOrders();

let orderStream = createWriteStream('./seeders/orders.json');

orderStream.write(JSON.stringify(orders));