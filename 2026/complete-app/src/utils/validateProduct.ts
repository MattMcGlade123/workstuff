import { requiredKeys } from "../config/constants.ts";
import type { ProductInputInt } from "../type.ts";

export const validateProduct = (newProduct: ProductInputInt | null): boolean => {
  if (newProduct === null) {
    return false
  }
  return requiredKeys.every((i) => newProduct.hasOwnProperty(i));
}