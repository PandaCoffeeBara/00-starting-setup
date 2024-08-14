import { Request, Response } from 'express';
import { Product } from '../../products/services/product';

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  const products = await Product.fetchAll()
  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products'
  });
};

export const getIndex = async (_req: Request, res: Response): Promise<void>=> {
  const products = await Product.fetchAll();
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
};

export const getCart = (_req: Request, res: Response): void => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

export const getOrders = (_req: Request, res: Response): void => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

export const getCheckout = (_req: Request, res: Response): void => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
