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
