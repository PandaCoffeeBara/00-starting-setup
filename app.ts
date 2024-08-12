// enable the usage of env variables in the app
import { config } from 'dotenv-safe';
config();

import './instrumented.ts'; // Initialize Sentry

import path, { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { setupExpressErrorHandler } from '@sentry/node';


import {
    adminRouter,
    shopRouter
} from './src/routes';
import notFound from './src/controllers/notFound';
import requestLogger from './src/middleware/requestLogger';
import errorHandler from './src/middleware/errorHandler';

const app = express();

// --- App Middleware ---
//Todo: change the viewing engine to react when we update from ejs to react
app.set('view engine', 'ejs');
app.set('views', path.join(dirname('./'), 'src/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(dirname('./'), 'src/public')));

// --- Security Middleware ---
app.use(helmet());

// --- Logging Middleware ---
app.use(requestLogger);

// --- Routes ---
//TODO: combine all routes in a central routes file
app.get('/', (req, res) => {
    res.send('Welcome to the shop');
})
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

app.get("/debug-sentry", function mainHandler() {
    throw new Error("My first Sentry error!");
})

app.all('*', notFound);


// --- Error Handling ---
// Sentry error handler must be the first middleware for error handling
setupExpressErrorHandler(app);
app.use(errorHandler);
// --- Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

export default app;