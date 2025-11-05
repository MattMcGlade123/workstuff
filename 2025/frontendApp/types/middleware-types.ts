import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Amenity = {
  __typename?: 'Amenity';
  /** The amenity category the amenity belongs to */
  category: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The amenity's name */
  name: Scalars['String']['output'];
};

export type CreateListingInput = {
  /** The Listing's amenities */
  amenities: Array<Scalars['ID']['input']>;
  /** Indicates whether listing is closed for bookings (on hiatus) */
  closedForBookings?: InputMaybe<Scalars['Boolean']['input']>;
  /** The cost per night */
  costPerNight: Scalars['Float']['input'];
  /** The listing's description */
  description: Scalars['String']['input'];
  /** The number of beds available */
  numOfBeds: Scalars['Int']['input'];
  /** The listing's title */
  title: Scalars['String']['input'];
};

export type CreateListingResponse = {
  __typename?: 'CreateListingResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** The newly created listing */
  listing?: Maybe<Listing>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type ImageType = {
  __typename?: 'ImageType';
  /** The alt tag for the image */
  alt: Scalars['String']['output'];
  /** The url of the image */
  url: Scalars['String']['output'];
};

/** A particular intergalactic location available for booking */
export type Listing = {
  __typename?: 'Listing';
  /** The amenities available for this listing */
  amenities: Array<Amenity>;
  /** Indicates if the listing is closed for bookings (on heiatus) */
  closedForBookings?: Maybe<Scalars['Boolean']['output']>;
  /** The cost per night */
  costPerNight?: Maybe<Scalars['Float']['output']>;
  /** The listing's description */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The number of beds */
  numOfBeds?: Maybe<Scalars['Int']['output']>;
  /** The name of the listing */
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new listing */
  createListing: CreateListingResponse;
  /** Register a new user */
  register: RegisterResponse;
  /** Signs user in */
  signIn: SignInResponse;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationSignInArgs = {
  input?: InputMaybe<SignInInput>;
};

export type OrderListType = {
  __typename?: 'OrderListType';
  /** An array of all the products */
  orders: Array<Product>;
  /** The page name for the product list */
  pageName: Scalars['String']['output'];
};

/** An individual product item */
export type Product = {
  __typename?: 'Product';
  /** A unque Id */
  _id: Scalars['String']['output'];
  /** The price of the product but formated */
  formattedPrice: Scalars['String']['output'];
  /** The image of the product */
  image: ImageType;
  /** The name of the product */
  name: Scalars['String']['output'];
  /** The price of the product */
  price: Scalars['Float']['output'];
  /** The path of the image for the product page */
  slug: Scalars['String']['output'];
};

export type ProductListType = {
  __typename?: 'ProductListType';
  /** The page name for the product list */
  pageName: Scalars['String']['output'];
  /** An array of all the products */
  products: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns details for a single product */
  aProduct?: Maybe<Product>;
  /** A curated array of listings to feature on the homepage */
  featuredListings: Array<Listing>;
  /** Returns the details about this listing */
  listing?: Maybe<Listing>;
  /** Returns list of orders */
  orderList?: Maybe<OrderListType>;
  /** Returns list of products */
  productList?: Maybe<ProductListType>;
};


export type QueryAProductArgs = {
  productSlug: Scalars['String']['input'];
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterInput = {
  /** The user's email address */
  email: Scalars['String']['input'];
  /** The user's password */
  password: Scalars['String']['input'];
  /** The users username */
  username: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
  /** The token for the user for authentication */
  token?: Maybe<Scalars['String']['output']>;
  /** The user's username */
  username?: Maybe<Scalars['String']['output']>;
};

export type SignInInput = {
  /** The user's email address */
  email: Scalars['String']['input'];
  /** The user's password */
  password: Scalars['String']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
  /** The user's token if sign in was successful */
  token?: Maybe<Scalars['String']['output']>;
};

export type GetProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductListQuery = { __typename?: 'Query', productList?: { __typename?: 'ProductListType', pageName: string, products: Array<{ __typename?: 'Product', name: string, price: number, slug: string, image: { __typename?: 'ImageType', alt: string, url: string } }> } | null };

export type GetAProductQueryVariables = Exact<{
  productSlug: Scalars['String']['input'];
}>;


export type GetAProductQuery = { __typename?: 'Query', aProduct?: { __typename?: 'Product', _id: string, slug: string, name: string, price: number, formattedPrice: string, image: { __typename?: 'ImageType', url: string, alt: string } } | null };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SignInResponse', code: number, token?: string | null, message: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', code: number, username?: string | null, token?: string | null, message: string } };


export const GetProductListDocument = gql`
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

/**
 * __useGetProductListQuery__
 *
 * To run a query within a React component, call `useGetProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductListQuery(baseOptions?: Apollo.QueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
      }
export function useGetProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
        }
export function useGetProductListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
        }
export type GetProductListQueryHookResult = ReturnType<typeof useGetProductListQuery>;
export type GetProductListLazyQueryHookResult = ReturnType<typeof useGetProductListLazyQuery>;
export type GetProductListSuspenseQueryHookResult = ReturnType<typeof useGetProductListSuspenseQuery>;
export type GetProductListQueryResult = Apollo.QueryResult<GetProductListQuery, GetProductListQueryVariables>;
export const GetAProductDocument = gql`
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

/**
 * __useGetAProductQuery__
 *
 * To run a query within a React component, call `useGetAProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAProductQuery({
 *   variables: {
 *      productSlug: // value for 'productSlug'
 *   },
 * });
 */
export function useGetAProductQuery(baseOptions: Apollo.QueryHookOptions<GetAProductQuery, GetAProductQueryVariables> & ({ variables: GetAProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAProductQuery, GetAProductQueryVariables>(GetAProductDocument, options);
      }
export function useGetAProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAProductQuery, GetAProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAProductQuery, GetAProductQueryVariables>(GetAProductDocument, options);
        }
export function useGetAProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAProductQuery, GetAProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAProductQuery, GetAProductQueryVariables>(GetAProductDocument, options);
        }
export type GetAProductQueryHookResult = ReturnType<typeof useGetAProductQuery>;
export type GetAProductLazyQueryHookResult = ReturnType<typeof useGetAProductLazyQuery>;
export type GetAProductSuspenseQueryHookResult = ReturnType<typeof useGetAProductSuspenseQuery>;
export type GetAProductQueryResult = Apollo.QueryResult<GetAProductQuery, GetAProductQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    code
    token
    message
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    code
    username
    token
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;