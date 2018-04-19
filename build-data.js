'use strict';
const { createWriteStream } = require('fs');

const { generateProducts } = require('./generators/product-faker.js');

// products
let products = generateProducts(10, 5);
let prodStream = createWriteStream(`seeders/products.json`);
prodStream.write(JSON.stringify(products));
