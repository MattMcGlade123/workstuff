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