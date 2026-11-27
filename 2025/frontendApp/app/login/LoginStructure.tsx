'use client';

import { StyleContainer } from './LoginStyles';
import { FC } from 'react';
import AuthForm from '@/components/AuthForm';

const LoginStructure: FC = () => {
  const loginFields = [
    {
      name: 'email',
      label: 'Enter Email',
      placeholder: 'A email',
      type: 'email'
    },
    {
      name: 'password',
      label: 'Enter Password',
      placeholder: 'A password',
      type: 'password'
    }
  ];

  return (
    <StyleContainer>
      <AuthForm type="login" fields={loginFields} />
    </StyleContainer>
  );
}

export default LoginStructure;
