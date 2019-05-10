const winston = require('winston');

const winston = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            level: 'debug'
        }),
        new(winston.transports.File)({
            filename: __dirname + '/../logs/reggie_node.log',
            level: 'debug'
        })
    ]
});

winston.info('Chill Winston, the logs are being captured 2 ways - console and file')

module.exports = winston;