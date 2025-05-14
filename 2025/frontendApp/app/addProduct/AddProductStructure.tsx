'use client';

import { StyleContainer } from './AddProductStyles';
import { FC } from 'react';
import ProductForm from '@/components/ProductForm';

const AddProductStructure: FC = () => {
  return (
    <StyleContainer>
      <ProductForm />
    </StyleContainer>
  );
}

export default AddProductStructure;
