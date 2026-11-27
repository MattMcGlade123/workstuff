import { getAllOrdersPageData } from '../dbs/orders';
import express from 'express';

export const getAllOrdersData = async (req: express.Request,
  res: express.Response) => {
  try {
    const ordersData = await getAllOrdersPageData();

    if (!ordersData) {
      return res.sendStatus(400)
    }

    const finalData = {
      pageName: ordersData[0].pageName,
      orders: ordersData[0].orders
    }

    return res.status(200).json(finalData)


  } catch (error) {
    return res.sendStatus(400)
  }
}