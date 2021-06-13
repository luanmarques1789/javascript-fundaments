require('dotenv').config();
const { log } = require('console');

const msg = process.env.NODE_ENV;
console.log(msg);
console.log(global.process.env);
