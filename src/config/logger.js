import winston from 'winston'
import config from './config.js'

const customLevelsOptions = {
    levels: {
        fatal: 1,
        error: 0,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5,
    },
    colors: {
        fatal: 'red',
        error: 'magenta',
        warning: 'yellow',
        info: 'blue',
        http: 'green',
        debug: 'white',
    }
};

const loggerProd = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({ level: 'info' }),
        // new winston.transports.File({ filename: './error.log', level: 'warn' })
    ]
});
const loggerDev = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelsOptions.colors }),
                winston.format.simple(),
            ),
        }),
    ]
});

export const addLogger = (req, res, next) => {
    req.logger = config.ENV === 'prod' ? loggerProd : loggerDev;
    next();
}