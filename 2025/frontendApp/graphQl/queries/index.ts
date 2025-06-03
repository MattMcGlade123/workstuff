import { gql } from "@apollo/client";

export const PRODUCT_LIST = gql`
  query GetProductList {
   productList {
    pageName
    products {
      name
      price
      slug
      image {
        alt
        url
      }
    }
  }
}
`;