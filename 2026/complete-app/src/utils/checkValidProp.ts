import { requiredKeys } from "../config/constants.ts";
import type { ProductInputInt } from "../type.ts";

export const checkValidProp = (object: ProductInputInt): ProductInputInt | null => {
  const cleanObject: ProductInputInt = {}

  Object.entries(object).forEach(([key, value]) => {
    if (requiredKeys.includes(key)) {
      // @ts-ignore
      cleanObject[key] = value
    }

  })

  if (Object.keys(cleanObject).length !== 0) {
    return cleanObject;
  }

  return null
};