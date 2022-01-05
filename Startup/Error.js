const winston = require('winston');
require('winston-mongodb');

module.exports = function () {
    // process.on('uncaughtException', (ex) => {
    //     console.log("Error ufff");
    //     winston.error(`Error Ocuured ${ex}`, { metadata: ex })
    // });

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'Exception.log' })
    );

    winston.add(
        winston.transports.File, { filename: 'logfile.log', level: 'warn' });

    winston.add(
        winston.transports.MongoDB, { db: 'mongodb://localhost:27017/LifeOn', level: 'info' },
    );

    // winston.configure({ transports: [new winston.transports.MongoDB({ db: 'mongodb://localhost:27017/LifeOn' })] });

    // throw new Error("Uncaught Exception");

    // const p = Promise.reject('The Error has been occured');
    // p.then(() => {

    //     console.log("Done");
    // })
}