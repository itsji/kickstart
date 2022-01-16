const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    phrase: process.env.PHRASE,
    endpoint: process.env.ENDPOINT
};