import React, { FC } from 'react';

import ProductDetailsLogic from './ProductDetailsLogic';
import { SingleProductDataInt } from '@/custom-type';



const ProductDetails: FC<SingleProductDataInt> = ({
  thisProduct,
}) => {
  const componentProps = {
    thisProduct
  }

  return <ProductDetailsLogic {...componentProps} />;
};

export default ProductDetails;
