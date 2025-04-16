import { addProductData } from '../controller/products';
import express from 'express';

export const addProductRoute = (router: express.Router) => {
  // @ts-ignore
  router.post('/add', addProductData)
}

export default addProductRoute;