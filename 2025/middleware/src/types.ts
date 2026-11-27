import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Amenity: ResolverTypeWrapper<Amenity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateListingInput: CreateListingInput;
  CreateListingResponse: ResolverTypeWrapper<CreateListingResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageType: ResolverTypeWrapper<ImageType>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Listing: ResolverTypeWrapper<Listing>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderListType: ResolverTypeWrapper<OrderListType>;
  Product: ResolverTypeWrapper<Product>;
  ProductListType: ResolverTypeWrapper<ProductListType>;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  SignInInput: SignInInput;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Amenity: Amenity;
  Boolean: Scalars['Boolean']['output'];
  CreateListingInput: CreateListingInput;
  CreateListingResponse: CreateListingResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  ImageType: ImageType;
  Int: Scalars['Int']['output'];
  Listing: Listing;
  Mutation: {};
  OrderListType: OrderListType;
  Product: Product;
  ProductListType: ProductListType;
  Query: {};
  RegisterInput: RegisterInput;
  RegisterResponse: RegisterResponse;
  SignInInput: SignInInput;
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
};

export type AmenityResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateListingResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateListingResponse'] = ResolversParentTypes['CreateListingResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ImageType'] = ResolversParentTypes['ImageType']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  amenities?: Resolver<Array<ResolversTypes['Amenity']>, ParentType, ContextType>;
  closedForBookings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costPerNight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numOfBeds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createListing?: Resolver<ResolversTypes['CreateListingResponse'], ParentType, ContextType, RequireFields<MutationCreateListingArgs, 'input'>>;
  register?: Resolver<ResolversTypes['RegisterResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, Partial<MutationSignInArgs>>;
};

export type OrderListTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['OrderListType'] = ResolversParentTypes['OrderListType']> = {
  orders?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ProductListType'] = ResolversParentTypes['ProductListType']> = {
  pageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryAProductArgs, 'productSlug'>>;
  featuredListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<QueryListingArgs, 'id'>>;
  orderList?: Resolver<Maybe<ResolversTypes['OrderListType']>, ParentType, ContextType>;
  productList?: Resolver<Maybe<ResolversTypes['ProductListType']>, ParentType, ContextType>;
};

export type RegisterResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Amenity?: AmenityResolvers<ContextType>;
  CreateListingResponse?: CreateListingResponseResolvers<ContextType>;
  ImageType?: ImageTypeResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OrderListType?: OrderListTypeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductListType?: ProductListTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
};

