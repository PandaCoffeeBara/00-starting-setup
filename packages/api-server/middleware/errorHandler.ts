import { ErrorRequestHandler } from "express";

import logger from "../utils/logger";

/**
 * Error handler middleware 
 * @param {Error} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {void}
 */
const errorHandler: ErrorRequestHandler = (err, req, res): void => {
    // Log the error stack trace for debugging
    logger.error(err.stack || ''); 

    // Extract statusCode and status from the error, defaulting to 500 and 'error'
    const statusCode = err.statusCode || 500;
    const status = err.status || 'Internal Server Error';

    if(process.env.NODE_ENV === 'production') {
        // Only send the status and message in production
        res.status(statusCode).json({
            status,
            message: err.message
        });
    }

    // Send the full error stack in development
    res.status(statusCode).json({
        status,
        message: err.message,
        stack: err.stack
    })
}

export default errorHandler;