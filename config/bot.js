var Twit = require("twit");
// var keys = require('./keys');
require('dotenv').config()

module.exports = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});
