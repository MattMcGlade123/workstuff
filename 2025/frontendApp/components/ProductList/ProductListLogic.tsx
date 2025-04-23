'use client';

import React, { FC } from 'react';

import ProductListStructure from './ProductListStructure';
import { ListPageData } from '@/custom-type';


const ProductListLogic: FC<ListPageData> = ({
  pageName,
  products
}) => {
  const componentProps = {
    pageName,
    products
  }

  return <ProductListStructure {...componentProps} />;
};

export default ProductListLogic;
