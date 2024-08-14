import { Router } from 'express';
import { getProducts, getIndex, getCart, getCheckout, getOrders } from '../controllers/shopController';

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;