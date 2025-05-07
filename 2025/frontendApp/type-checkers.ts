import { ProductTypeBasic, LoginFormInt } from "./custom-type";

export const isProductFormData = (data: ProductTypeBasic | LoginFormInt): data is ProductTypeBasic => {
  if ('price' in data) {
    return true;
  }
  return false;
};