'use client';

import React, { FC } from 'react';

import ProductDetailsStructure from './ProductDetailsStructure';
import { SingleProductDataInt } from '@/custom-type';


const ProductDetailsLogic: FC<SingleProductDataInt> = ({
  thisProduct,
}) => {
  const componentProps = {
    thisProduct
  }

  return <ProductDetailsStructure {...componentProps} />;
};

export default ProductDetailsLogic;
