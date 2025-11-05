'use client';

import { FC } from 'react';

import ProductPageStructure from './ProductPageStructure';
import { AllSingleProductData } from '@/custom-type';

const ProductPageLogic: FC<AllSingleProductData> = ({ thisProduct, error }) => {
  const componentProps = {
    thisProduct,
    error
  }

  return (
    <ProductPageStructure {...componentProps} />
  );
};

export default ProductPageLogic;
