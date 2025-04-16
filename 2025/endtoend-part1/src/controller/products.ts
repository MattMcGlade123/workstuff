import { ProductType } from '../../types';
import { addProduct, getAllPageData, getProductBySlug } from '../dbs';
import express from 'express';

export const getAllProductsData = async (req: express.Request,
  res: express.Response) => {
  try {
    const productListData = await getAllPageData();

    if (!productListData) {
      return res.sendStatus(400)
    }

    const finalData = {
      pageName: productListData[0].pageName,
      products: productListData[0].products
    }

    return res.status(200).json(finalData)


  } catch (error) {
    return res.sendStatus(400)
  }
}

export const getProduct = async (req: express.Request,
  res: express.Response) => {
  const { slug } = req.params;

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

export const addProductData = async (req: express.Request,
  res: express.Response) => {
  try {
    const { slug, name, price, image } = req.body;

    const priceAsNumber = Number(price);

    if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
      return res.status(400).json({ error: 'Price must be a valid number' });
    }

    if (!slug || !name || !price || !image || !image.url) {
      return res.status(400).json({ error: 'Missing required product fields' });
    }

    const productData = await addProduct({
      slug,
      name,
      price: priceAsNumber,
      image
    })

    return (
      res.status(200).json(productData).end()
    );

  } catch (error) {
    return res.sendStatus(400)
  }
}