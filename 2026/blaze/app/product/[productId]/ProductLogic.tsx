import React, { FC } from 'react';

import { Product } from '../../../shared/types/customTypes';
import ProductStructure from './ProductStructure';

export interface ProductProps {
  thisProduct: Product | undefined;
}

const ProductLogic: FC<ProductProps> = ({ thisProduct }) => {
  const componentProps = {
    thisProduct,
  };
  return <>{thisProduct && <ProductStructure {...componentProps} />}</>;
};

export default ProductLogic;
