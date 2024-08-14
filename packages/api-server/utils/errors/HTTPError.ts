/**
 * Custom error class for handling application errors
 * @class HTTPError
 * @extends {Error}
 * @param {number} statusCode - The HTTP status code
 * @param {string} status - The HTTP status message
 * @param {boolean} isOperational - Indicates if the error is operational, example: validation error
 */
export class HTTPError extends Error {
    public readonly statusCode: number;
    public readonly status: string;
    public readonly isOperational: boolean; 

    constructor(message: string, statsusCode:number, isOperational: boolean){
        super(message);
        this.statusCode = statsusCode;
        // Define the status property based on the statusCode (fail for 4xx and error for 5xx)
        this.status = `${statsusCode}`.startsWith('4') ? 'fail' : 'error';
        /*
        * Indicates if the error is operational and can be handled by the application
        * or if it is a bug or an error that cannot be handled by the application
        * Example of operational errors:
        * - Validation error
        * - Authentication errors
        * - Authorization errors
        * - 404 not found
        * - Rate limiting
        * - Timeouts
        * - 503 service unavailable
        * - DB errors
        * - FS errors
        * - Network errors
        * Example of non-operational errors:
        * - SyntaxErrors, missconfigurations
        * - Dependency errors
        * - Memory leaks
        * - Unhandled exceptions
        * - Unhandled promise rejections
        * - Infinite loops
        */
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}