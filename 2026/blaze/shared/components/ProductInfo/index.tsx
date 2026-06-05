'use client';

import React, { FC } from 'react';

import { Product } from '../../types/customTypes';
import ProductInfoLogic from './ProductInfoLogic';

export interface ProductInfoProps {
  thisProduct: Product;
}

const ProductInfo: FC<ProductInfoProps> = ({ thisProduct }) => {
  const componentProps = {
    thisProduct,
  };

  return <ProductInfoLogic {...componentProps} />;
};

export default ProductInfo;
