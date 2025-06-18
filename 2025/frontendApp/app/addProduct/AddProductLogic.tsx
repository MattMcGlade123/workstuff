'use client';

import { FC, useEffect, useState } from 'react';

import ProductPageStructure from './AddProductStructure';
import { CheckAuthResponse } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';

const AddProductLogic: FC = () => {
  const [isAuthed, setIsAuthed] = useState(false);

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
      setIsAuthed(false)
    }
    else if (finalData?.error) {
      setIsAuthed(false)
    }
    else if (finalData?.authenticated === false) {
      setIsAuthed(false)
    }
    else {
      setIsAuthed(true)
    }
  }

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const componentProps = {
    isAuthed
  }

  return (
    <ProductPageStructure {...componentProps} />
  );
};

export default AddProductLogic;
