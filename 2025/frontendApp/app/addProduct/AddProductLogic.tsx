'use client';

import { FC, useEffect, useState } from 'react';

import ProductPageStructure from './AddProductStructure';
import { CheckAuthResponse } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';

const AddProductLogic: FC = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const updateStates = (loadingState: boolean, authState: boolean) => {
    setIsLoading(loadingState);
    setIsAuthed(authState);
  }

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('product-api-token');

    const { finalData, error } = await fetchData<CheckAuthResponse>('http://localhost:8080/auth/check-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })

    if (error) {
      updateStates(false, false);
    }
    else if (finalData?.error) {
      updateStates(false, false);
    }
    else if (finalData?.authenticated === false) {
      updateStates(false, false);
    }
    else {
      updateStates(false, true)
    }
  }

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const componentProps = {
    isLoading,
    isAuthed
  }

  return (
    <ProductPageStructure {...componentProps} />
  );
};

export default AddProductLogic;
