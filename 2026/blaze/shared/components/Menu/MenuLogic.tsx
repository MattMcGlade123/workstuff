'use client';

import React, { FC } from 'react';

import { useAuth } from '../../hooks/useAuth';
import MenuStructure from './MenuStructure';

const MenuLogic: FC = () => {
  const { isLoggedIn, user, logout } = useAuth();

  const componentProps = {
    isLoggedIn,
    user,
    logout,
  };

  return <MenuStructure {...componentProps} />;
};

export default MenuLogic;
