const express = require("express");
const expressObj = new express();
const winston = require('winston');
const jest = require('jest');

require('./Startup/Error')();
require('./Startup/ConfigIndex')();
require('./Startup/Routes')(expressObj);
require('./Startup/Database')();
require('./Startup/Api')();

process.env.NODE_APP_INSTANCE = 1;

const port = process.env.PORT || 4000;
const server = expressObj.listen(port, () => {
    // winston.warn(`connected on ${port}`);
    // winston.error(`connected on ${port}`);
    winston.info(`connected on ${port}`);
    // winston.verbose(`connected on ${port}`);
    // winston.silly(`connected on ${port}`);
    // winston.debug(`connected on ${port}`);

});

module.exports = server;

