import { ProductTypeBasic } from "@/custom-type";

export const validateData = (data: ProductTypeBasic) => {
  let hasValidData = true;

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

  return hasValidData;
}