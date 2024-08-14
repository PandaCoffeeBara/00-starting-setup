import { createLogger, format, transports } from 'winston';
import 'winston-logstash';
const { combine, timestamp, label, printf, colorize } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

/**
 * Winston logger
 */
const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        colorize(),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: `${process.env.LOG_DIR}/error-%DATE%.log`, level: 'error' }),
        new transports.File({ filename: `${process.env.LOG_DIR}/combined-%DATE%.log` }),
    ]
});

export default logger;