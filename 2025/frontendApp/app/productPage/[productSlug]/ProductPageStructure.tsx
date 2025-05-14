'use client';

import { StyleContainer } from './ProductPageStyles';
import { FC } from 'react';
import { AllSingleProductData } from '@/custom-type';
import ProductDetails from '@/components/ProductDetails';

const ProductPageStructure: FC<AllSingleProductData> = ({ thisProduct, error }) => {
  return (
    <StyleContainer>
      {error && (
        <>
          <h2>There has been an error fetching data</h2>
          <div>{JSON.stringify(error)}</div>
        </>
      )}

      {!error && (
        <ProductDetails thisProduct={thisProduct} />
      )}
    </StyleContainer>
  );
}

export default ProductPageStructure;
