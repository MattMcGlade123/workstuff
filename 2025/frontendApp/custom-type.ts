export interface ProductType {
  _id: string,
  slug: string,
  name: string,
  price: number,
  image: {
    url: string,
    alt: string,
  }
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
  thisProduct: ProductType
  error: any
}

export interface SingleProductDataInt {
  thisProduct: ProductType
}
