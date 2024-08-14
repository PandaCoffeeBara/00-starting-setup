import { ErrorRequestHandler } from "express";

import logger from "../utils/logger";

/**
 * Error handler middleware 
 * @param {Error} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 * @returns {void}
 */
const errorHandler: ErrorRequestHandler = (err, req, res, next): void => {
    logger.error(err.stack || '') 

    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    if(err.isOperational){
        res.status(statusCode).json({
            status,
            message: err.message
        });
    }

    if (process.env.NODE_ENV === 'production'){
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        })
    }

    res.status(statusCode).json({
        status,
        message: err.message,
        stack: err.stack
    })

    next(err);
}

export default errorHandler;