import { getAllProductsData } from '../controller/products';
import express from 'express';

export const productListRoute = (router: express.Router) => {
  // @ts-ignore
  router.get('/products', getAllProductsData)
}

export default productListRoute;