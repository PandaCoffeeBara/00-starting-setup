import { Response, Request } from "express";
import { Product } from '../../products/services/product';

export const getAddProduct = (_req: Request, res: Response) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: 'admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

export const postAddProduct = async (req: Request, res: Response) => {
  try{
    const { title, imageUrl, price, description } = req.body;
    const product = new Product(title, imageUrl, description, price);
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  }catch(error){
    logger.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  await Product.fetchAll().then((products: Product[]) =>{
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: 'admin/products'
      });
  })
};
