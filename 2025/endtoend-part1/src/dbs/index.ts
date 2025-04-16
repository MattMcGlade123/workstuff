import mongoose from "mongoose";

import { ProductListType, ProductType } from '../../types'

const productModelSchema = new mongoose.Schema({
  slug: { type: String, required: true, select: true },
  name: { type: String, required: true, select: true },
  price: { type: Number, required: true },
  image: {
    url: { type: String, required: true },
    alt: { type: String, required: true }
  }
});

const productListModelSchema = new mongoose.Schema({
  pageName: { type: String, required: true },
  products: [productModelSchema]
})

export const productListModel = mongoose.model('ProductList', productListModelSchema);

export const getAllPageData = (): Promise<ProductListType[]> => productListModel.find({});
export const getProductBySlug = (slug: string): Promise<{ products: ProductType[] } | null> => productListModel.findOne(
  { 'products.slug': slug }, // This finds the data that matches in the document
  { products: { $elemMatch: { 'slug': slug } }, _id: 0 } // This tells mongodb what to return rather than the whole data
);
export const addProduct = (newProduct: ProductType) => {
  return productListModel.updateOne(
    { _id: "67f6a05e72fb7ac60835732a" },
    { $push: { products: newProduct } }
  );
};

export const updateProduct = (slug: string, newProduct: ProductType) => productListModel.updateOne({ 'products.slug': slug },
  {
    $set: {
      'products.$': newProduct
    }
  }
);