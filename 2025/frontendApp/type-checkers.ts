import { ProductTypeBasic, LoginFormInt, RegisterFormInt } from "./custom-type";

export const isProductFormData = (data: ProductTypeBasic | LoginFormInt | RegisterFormInt): data is ProductTypeBasic => {
  if ('price' in data) {
    return true;
  }
  return false;
};

export const isRegisterFormData = (data: ProductTypeBasic | LoginFormInt | RegisterFormInt): data is RegisterFormInt => {
  if ('username' in data) {
    return true;
  }
  return false;
};