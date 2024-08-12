import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import logger from '../../../utils/logger';

const fullPath = path.join(
  path.dirname(require.main?.filename ?? ''),
  'data',
  'products.json'
);

const getProductsFromFile = async (): Promise<Product[]> => {
  try {
    const products = await readFile(fullPath, 'utf8');
    return JSON.parse(products);
  } catch (error: unknown) {
    logger.error(error);
    return [];
  }
};

interface ProductInterface {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

// A class is not the greatest idea for the module
class Product implements ProductInterface {
  title: string;
  imageUrl: string;
  description: string;
  price: number;

  constructor(title: string, imageUrl: string, description: string, price: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save(): Promise<void> {
    const products = await getProductsFromFile();
    products.push(this);

    try {
      await writeFile(fullPath, JSON.stringify(products), 'utf8');
    } catch (error: unknown) {
      console.error(error);
      throw new Error('Error saving product');
    }
  }

  static async fetchAll(): Promise<Product[]> {
    return await getProductsFromFile();
  }
}

export { Product };
export type { ProductInterface };