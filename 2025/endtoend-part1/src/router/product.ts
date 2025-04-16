import { getProduct } from '../controller/products';
import express from 'express';

export const productRoute = (router: express.Router) => {
  // @ts-ignore
  router.get('/products/:slug', getProduct)
}

export default productRoute;