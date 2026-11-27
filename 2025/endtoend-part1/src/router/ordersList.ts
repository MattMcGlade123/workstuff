import { getAllOrdersData } from '../controllers/orders';
import express from 'express';

export const ordersList = (router: express.Router) => {
  // @ts-ignore
  router.get('/orders', getAllOrdersData)
}

export default ordersList;