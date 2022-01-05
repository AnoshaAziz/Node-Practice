const mongoose = require('mongoose');
const { level, info } = require('winston');
const winston = require('winston');
const config = require("config");

module.exports = function () {

    const db = config.get("db")
    mongoose.connect(db)
        .then(() => {
            winston.info(`Connected to Database ${db}`)
        })
        ;
}