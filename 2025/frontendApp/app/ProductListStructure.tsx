'use client';
import { AllProductData } from '@/custom-type';
import { StyleContainer } from './HomeStyles';
import { FC } from 'react';
import ProductList from '@/components/ProductList';

const ProductListStructure: FC<AllProductData> = ({
  pageName,
  products,
  error
}) => (
  <StyleContainer>
    {error && (
      <>
        <h2>There has been an error fetching data</h2>
        <div>{JSON.stringify(error)}</div>
      </>
    )}

    {!error && (
      <ProductList pageName={pageName} products={products} />
    )}
  </StyleContainer>
);

export default ProductListStructure;
