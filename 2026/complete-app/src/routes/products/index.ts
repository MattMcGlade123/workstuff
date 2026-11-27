import { type Request, type Response } from 'express';
import { Product } from "../../models/Product.ts"
import { checkValidProp } from '../../utils/checkValidProp.ts';
import { validateProduct } from '../../utils/validateProduct.ts';

export const getProducts = async (req: Request, res: Response) => {
  const search = typeof req.query.search === 'string' ? req.query.search : undefined;

  if (search) {
    const pattern = new RegExp(search, 'i')
    try {
      const filteredProducts = await Product.find({
        $or: [{ title: pattern }, { description: pattern }]
      })

      if (filteredProducts.length === 0) {
        return res.status(200).send({ message: 'No products found' });
      }

      return res.status(200).send({ filteredProducts: filteredProducts });
    } catch (error) {
      res.status(500).send(`There was an error - ${error}`);
    }

  }
  const allProducts = await Product.find({});

  return res.status(200).send({ products: allProducts });
}

export const getSingleProduct = async (req: Request, res: Response) => {
  const productCode = req.params?.id

  if (productCode) {
    try {
      const aProduct = await Product.findById(productCode)

      if (aProduct) {
        return res.status(200).send({ product: aProduct });
      }

      return res.status(200).send({ message: 'No products were found' });

    } catch (error) {
      res.status(500).send(`There was an error - ${error}`);
    }
  }

  return res.status(200).send({ message: 'Missing product code' });
}

export const addSingleProduct = async (req: Request, res: Response) => {
  const newProduct = req.body?.product

  if (newProduct) {
    try {
      const productToAdd = checkValidProp(newProduct)
      const hasAllfields = validateProduct(productToAdd)
      if (productToAdd && hasAllfields) {
        const aProduct = await Product.create({ ...newProduct })
        if (aProduct) {
          return res.status(200).send({ message: `new product added - ${aProduct}` });
        }
      }
      return res.status(200).send({ message: 'No products were found' });

    } catch (error) {
      res.status(500).send(`There was an error - ${error}`);
    }

  }

  return res.status(200).send({ message: 'Missing product code' });
}

export const updateSingleProduct = async (req: Request, res: Response) => {
  const productCode = req.params?.id
  const updateOptions = req.body?.options

  if (productCode === undefined || productCode?.length === 0) {
    return res.status(200).send({ message: 'Missing product code' });
  }
  if (!updateOptions) {
    return res.status(200).send({ message: 'Missing update options' });
  }

  const parsedUpdateOptions = checkValidProp(updateOptions)

  if (parsedUpdateOptions === null) {
    return res.status(200).send({ message: 'Missing update options' });
  }

  try {
    const oldProduct = await Product.findById(productCode)

    if (oldProduct) {
      const updatedProduct = await Product.updateOne({ _id: productCode }, { $set: parsedUpdateOptions })
      return res.status(200).send({ oldProduct, updatedProduct });
    }

    return res.status(200).send({ message: 'No products were found' });

  } catch (error) {
    res.status(500).send(`There was an error - ${error}`);
  }
}

export const deleteSingleProduct = async (req: Request, res: Response) => {
  const productCode = req.params?.id

  if (productCode === undefined) {
    return res.status(200).send({ message: 'Missing product code' });
  }

  try {
    const oldProduct = await Product.deleteOne({ _id: productCode })

    if (oldProduct.deletedCount === 1) {
      return res.status(200).send({ message: `Product ${productCode} has been deleted` });
    }

    return res.status(200).send({ message: 'No products were found' });

  } catch (error) {
    res.status(500).send(`There was an error - ${error}`);
  }
}