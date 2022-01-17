const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

module.exports = {
    phrase: process.env.PHRASE,
    endpoint: process.env.ENDPOINT,
    address: process.env.ADDRESS
};