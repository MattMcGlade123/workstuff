// This file contains the TypeScript interfaces for the product data and form fields used in the application.

// Data types
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

export interface AllOrderData {
  pageName: string,
  orders: ProductType[],
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
  thisProduct: ProductType | undefined
}

export interface OptionsInt {
  method: string,
  body: string,
  headers: {
    'Content-Type': string;
    Authorization?: string
  }
}
export interface FormFields {
  'image-alt': string;
  'image-url': string;
  name: string;
  price: string;
  slug: string;
}

export interface LoginFormInt {
  email: string;
  password: string;
}

export interface RegisterFormInt {
  email: string;
  username: string;
  password: string;
}

export interface AddResponse {
  acknowledged: boolean,
  modifiedCount: number,
  upsertedId: string,
  upsertedCount: number,
  matchedCount: number
}
export interface CheckAuthResponse {
  authenticated: boolean,
  error: any
}


// State types

export interface AuthState {
  isAuth: boolean;
}