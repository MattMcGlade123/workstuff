'use client';

import { StyleContainer } from './AddProductStyles';
import { FC } from 'react';
import ProductForm from '@/components/ProductForm';
import Link from 'next/link';

interface AddProductStructureProps {
  isAuthed: boolean;
  isLoading?: boolean;
}

const AddProductStructure: FC<AddProductStructureProps> = ({ isAuthed, isLoading }) => {
  return (
    <StyleContainer>
      {isLoading && (
        <p>Loading...</p>
      )}
      {!isAuthed && !isLoading && (
        <div>
          <h1>You are not authenticated to add a product, you need to login first</h1>
          <Link href={'/login'}>
            Login
          </Link>
        </div>
      )}
      {isAuthed && <ProductForm />}
    </StyleContainer>
  );
}

export default AddProductStructure;
