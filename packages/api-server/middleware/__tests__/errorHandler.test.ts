import { Request, Response, NextFunction } from 'express';
import errorHandler from '../errorHandler';
import logger from '../../utils/logger';

// Mock the logger
jest.mock('../../utils/logger', () => ({
    error: jest.fn(),
}));

describe('errorHandler middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it('should log the error stack trace', () => {
        const error = new Error('Test Error');
        error.stack = 'Error stack trace';
        
        errorHandler(error, req as Request, res as Response, next);
        
        expect(logger.error).toHaveBeenCalledWith('Error stack trace');
    });

    it('should respond with the status code and message in production', () => {
        process.env.NODE_ENV = 'production';
        const error = new Error('Test Error');
        error['statusCode'] = 400;
        error['status'] = 'Bad Request';

        errorHandler(error, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            status: 'Bad Request',
            message: 'Test Error',
        });
    });

    it('should respond with the status code, message, and stack trace in development', () => {
        process.env.NODE_ENV = 'development';
        const error = new Error('Test Error');
        error.stack = 'Error stack trace';
        error['statusCode'] = 500;
        error['status'] = 'Internal Server Error';

        errorHandler(error, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            status: 'Internal Server Error',
            message: 'Test Error',
            stack: 'Error stack trace',
        });
    });

    it('should default to 500 status code and "Internal Server Error" status if not provided', () => {
        const error = new Error('Test Error');

        errorHandler(error, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            status: 'Internal Server Error',
            message: 'Test Error',
            stack: error.stack,
        });
    });
});
