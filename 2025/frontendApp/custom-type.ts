export interface ProductTypeBasic {
  slug: string,
  name: string,
  price: number,
  image: {
    url: string,
    alt: string,
  }
}

export interface ProductType extends ProductTypeBasic {
  _id: string,
}

export interface AllProductData {
  pageName: string,
  products: ProductType[],
  error: any
}

export interface ListPageData {
  pageName: string,
  products: ProductType[],
}

export interface AllSingleProductData {
  thisProduct: ProductType | undefined
  error: any
}

export interface SingleProductDataInt {
  thisProduct: ProductType
}

export interface OptionsInt {
  method: string,
  body: string
}

export interface AddResponse {
  acknowledged: boolean,
  modifiedCount: number,
  upsertedId: string,
  upsertedCount: number,
  matchedCount: number
}

export interface FormFields {
  "image-alt": string;
  "image-url": string;
  name: string;
  price: string;
  slug: string;
}