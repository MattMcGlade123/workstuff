'use client';
import { ProductType } from '@/custom-type';
import { StyleContainer, StyleList } from './HomeStyles';
import { FC } from 'react';

interface ProductListStructureProps {
  pageTitle: string,
  products: ProductType[]
}

const ProductListStructure: FC<ProductListStructureProps> = ({
  pageTitle,
  products
}) => {
  return (
    <StyleContainer>
      <h1>{pageTitle}</h1>
      <StyleList>
        {products && products.map((thisProduct) => (
          <div key={thisProduct._id}>
            <p>{thisProduct?.name}</p>
            <p>£{thisProduct?.price}</p>
            <img src={thisProduct?.image?.url} alt={thisProduct?.image?.alt} />
          </div>
        ))}
      </StyleList>
    </StyleContainer>
  );
}

export default ProductListStructure;
