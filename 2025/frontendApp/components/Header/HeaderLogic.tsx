'use client';

import React from 'react';

import HeaderStructure from './HeaderStructure';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, updateIsAuth } from '@/features/auth';
import { useRouter } from 'next/navigation';

const HeaderLogic = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(selectIsAuth);

  const logout = () => {
    localStorage.removeItem('product-api-token');
    dispatch(updateIsAuth(false));
    router.push('/')
  }

  const componentProps = {
    isLoggedIn,
    logout
  }
  return <HeaderStructure {...componentProps} />;
};

export default HeaderLogic;
