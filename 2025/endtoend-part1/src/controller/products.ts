import { ProductType } from '../../types';
import { getAllPageData, getProductBySlug } from '../dbs';
import express from 'express';

export const getAllProductsData = async (req: express.Request,
  res: express.Response) => {
  try {
    const productListData = await getAllPageData();

    if (!productListData) {
      return res.sendStatus(400)
    }

    return res.status(200).json(productListData)


  } catch (error) {
    return res.sendStatus(400)
  }
}

export const getProduct = async (req: express.Request,
  res: express.Response) => {
  const { slug } = req.params;

  console.log('slug', slug)

  try {
    const productData = await getProductBySlug(slug)

    if (!productData) {
      return res.status(400).json({ "error": "No product exists for this url" })
    }

    return res.status(200).json(productData)

  } catch (error) {
    return res.sendStatus(400)
  }
}