
import React, { FC } from 'react';

import {
  StyledWrapper,
  StyledTitle
} from './ProductDetailsStyles';
import { SingleProductDataInt } from '@/custom-type';


const ProductDetailsStructure: FC<SingleProductDataInt> = ({ thisProduct }) => {
  return (
    <StyledWrapper>
      {thisProduct && <StyledTitle>{thisProduct.name}</StyledTitle>}
      {thisProduct && <h3>£{thisProduct.price}</h3>}
      <img src={thisProduct?.image?.url} alt={thisProduct?.image?.alt} />
    </StyledWrapper>
  );
};

export default ProductDetailsStructure;
