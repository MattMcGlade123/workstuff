import React, { FC } from 'react';

import ProductListLogic from './ProductListLogic';
import { ListPageData } from '@/custom-type';

const ProductList: FC<ListPageData> = ({
  pageName,
  products
}) => {
  const componentProps = {
    pageName,
    products
  }

  return <ProductListLogic {...componentProps} />;
};

export default ProductList;
