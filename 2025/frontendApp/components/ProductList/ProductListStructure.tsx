
import React, { FC } from 'react';
import Link from 'next/link';

import {
  StyledWrapper,
  StyledTitle
} from './ProductListStyles';
import { ListPageData } from '@/custom-type';


const ProductListStructure: FC<ListPageData> = ({ pageName, products }) => {
  return (
    <div data-testid="recipeList">
      <StyledTitle>{pageName}</StyledTitle>
      <StyledWrapper>
        {products && products.map((thisProduct) => (
          <Link href={`/productPage/${thisProduct.slug}`} key={thisProduct._id}>
            <p>{thisProduct?.name}</p>
            <p>£{thisProduct?.price}</p>
            <img src={thisProduct?.image?.url} alt={thisProduct?.image?.alt} />
          </Link>
        ))}
      </StyledWrapper>
    </div>
  );
};

export default ProductListStructure;
