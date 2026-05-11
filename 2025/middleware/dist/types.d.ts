import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
};
export type Amenity = {
    __typename?: 'Amenity';
    category: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};
export type CreateListingInput = {
    amenities: Array<Scalars['ID']['input']>;
    closedForBookings?: InputMaybe<Scalars['Boolean']['input']>;
    costPerNight: Scalars['Float']['input'];
    description: Scalars['String']['input'];
    numOfBeds: Scalars['Int']['input'];
    title: Scalars['String']['input'];
};
export type CreateListingResponse = {
    __typename?: 'CreateListingResponse';
    code: Scalars['Int']['output'];
    listing?: Maybe<Listing>;
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type ImageType = {
    __typename?: 'ImageType';
    alt: Scalars['String']['output'];
    url: Scalars['String']['output'];
};
export type Listing = {
    __typename?: 'Listing';
    amenities: Array<Amenity>;
    closedForBookings?: Maybe<Scalars['Boolean']['output']>;
    costPerNight?: Maybe<Scalars['Float']['output']>;
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    numOfBeds?: Maybe<Scalars['Int']['output']>;
    title: Scalars['String']['output'];
};
export type Mutation = {
    __typename?: 'Mutation';
    createListing: CreateListingResponse;
    register: RegisterResponse;
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
export type Product = {
    __typename?: 'Product';
    _id: Scalars['String']['output'];
    formattedPrice: Scalars['String']['output'];
    image: ImageType;
    name: Scalars['String']['output'];
    price: Scalars['Float']['output'];
    slug: Scalars['String']['output'];
};
export type ProductListType = {
    __typename?: 'ProductListType';
    pageName: Scalars['String']['output'];
    products: Array<Product>;
};
export type Query = {
    __typename?: 'Query';
    aProduct?: Maybe<Product>;
    featuredListings: Array<Listing>;
    listing?: Maybe<Listing>;
    productList?: Maybe<ProductListType>;
};
export type QueryAProductArgs = {
    productSlug: Scalars['String']['input'];
};
export type QueryListingArgs = {
    id: Scalars['ID']['input'];
};
export type RegisterInput = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    username: Scalars['String']['input'];
};
export type RegisterResponse = {
    __typename?: 'RegisterResponse';
    code: Scalars['Int']['output'];
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
    token?: Maybe<Scalars['String']['output']>;
    username?: Maybe<Scalars['String']['output']>;
};
export type SignInInput = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type SignInResponse = {
    __typename?: 'SignInResponse';
    code: Scalars['Int']['output'];
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
    token?: Maybe<Scalars['String']['output']>;
};
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
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
    Product: ResolverTypeWrapper<Product>;
    ProductListType: ResolverTypeWrapper<ProductListType>;
    Query: ResolverTypeWrapper<{}>;
    RegisterInput: RegisterInput;
    RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
    SignInInput: SignInInput;
    SignInResponse: ResolverTypeWrapper<SignInResponse>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
};
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
    testing?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    Product?: ProductResolvers<ContextType>;
    ProductListType?: ProductListTypeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RegisterResponse?: RegisterResponseResolvers<ContextType>;
    SignInResponse?: SignInResponseResolvers<ContextType>;
};
//# sourceMappingURL=types.d.ts.map