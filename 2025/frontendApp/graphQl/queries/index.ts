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

export const A_PRODUCT = gql`
  query GetAProduct($productSlug: String!) {
    aProduct(productSlug: $productSlug) {
      _id
      slug
      name
      price
      formattedPrice
      image {
        url
        alt
      }
    }
  }
`;

export const SIGNIN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      code,
      token,
      message
    }
  }
`;