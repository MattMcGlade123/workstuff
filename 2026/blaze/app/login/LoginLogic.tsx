'use client';

import React, { FC } from 'react';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../shared/hooks/useAuth';
import { LoginInterface } from '../../shared/types/customTypes';
import LoginStructure from './LoginStructure';

const LoginLogic: FC = () => {
  const { login } = useAuth();
  const router = useRouter();

  const loginForm = useForm<LoginInterface>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length === 0 ? 'This field is required' : null),
    },
  });

  const handleLoginSubmit = (formDetails: LoginInterface) => {
    if (formDetails.email && formDetails.password) {
      login(formDetails.email);
      router.push('/');
    }
  };

  const componentProps = {
    loginForm,
    handleLoginSubmit,
  };

  return <LoginStructure {...componentProps} />;
};

export default LoginLogic;
