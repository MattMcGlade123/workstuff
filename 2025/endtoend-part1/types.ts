export interface ProductType {
  slug: string,
  name: string,
  price: number,
  image: {
    url: string,
    alt: string,
  }
}

export interface ProductListType {
  pageName: string,
  products: ProductType[]
}