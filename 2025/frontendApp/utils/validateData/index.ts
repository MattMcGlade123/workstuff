import { LoginFormInt, ProductTypeBasic } from "@/custom-type";
import { isProductFormData } from "@/type-checkers";

export const validateData = (data: ProductTypeBasic | LoginFormInt): boolean => {
  let hasValidData = true;

  if (isProductFormData(data)) {
    if (data.name === '') {
      hasValidData = false
    }
    if (data.price === 0) {
      hasValidData = false
    }
    if (data.slug === '') {
      hasValidData = false
    }
    if (data.image.alt === '') {
      hasValidData = false
    }
    if (data.image.url === '') {
      hasValidData = false
    }
  }
  else {
    if (data.username === '') {
      hasValidData = false
    }
    if (data.password === '') {
      hasValidData = false
    }
  }



  return hasValidData;
}