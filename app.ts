import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';

import {
    adminRouter,
    shopRouter
} from './src/routes';

import { notFound } from './src/controllers/notFound';
import helmet from 'helmet';
import requestLogger from './src/middleware/requestLogger';
import errorHandler from './src/middleware/errorHandler';

const app = express();

// --- App Middleware ---
//Todo: change the viewing engine to react when we update from ejs to react
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src/public')));

// --- Security Middleware ---
app.use(helmet());

// --- Logging Middleware ---
app.use(requestLogger);

// --- Routes ---
//TODO: combine all routes in a central routes file
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

// Catch all unhandled requests
app.all('*', notFound);

// --- Error Handling ---
app.use(errorHandler);

// --- Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

export default app;