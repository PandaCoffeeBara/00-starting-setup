import logger from '../utils/logger';
import type { RequestHandler } from 'express';

const requestLogger: RequestHandler = (req, res, next) => {
    const start = new Date().getTime();
    res.on('finish', () => {
        const duration = new Date().getTime() - start;
        const logLevel = res.statusCode >= 400 ? 'error' : 'info';

        logger.log(logLevel, `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`, {
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            duration: `${duration}ms`
        });
    });
    next()
}

export default requestLogger;