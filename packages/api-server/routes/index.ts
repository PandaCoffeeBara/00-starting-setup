import express from 'express';
import type { Router } from 'express';

import adminRouter from '../features/admin/routes';
import shopRouter from '../features/shop/routes';

const apiRouter: Router = express.Router();

apiRouter.use('/admin', adminRouter);
apiRouter.use('/shop', shopRouter);

export { apiRouter };