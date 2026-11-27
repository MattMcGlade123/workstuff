'use client';
import { AllOrderData } from '@/custom-type';
import { StyleContainer } from './OrdersListStyles';
import { FC } from 'react';

const ProductListStructure: FC<AllOrderData> = ({
  pageName,
  orders,
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
      // <ProductList pageName={pageName} products={products} />
      <>
        {orders.map((thisItem) => (
          <p key={thisItem._id}>{thisItem.name}</p>
        ))}
      </>
    )}
  </StyleContainer>
);

export default ProductListStructure;
