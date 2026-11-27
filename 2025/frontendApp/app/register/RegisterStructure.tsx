'use client';

import { StyleContainer } from './RegisterStyles';
import { FC } from 'react';
import AuthForm from '@/components/AuthForm';

const RegisterStructure: FC = () => {
  const registerFields = [
    {
      name: 'email',
      label: 'Enter email',
      placeholder: 'test@testing.com',
      type: 'email'
    },
    {
      name: 'username',
      label: 'Enter Username',
      placeholder: 'username',
      type: 'text'
    },
    {
      name: 'password',
      label: 'Enter Password',
      placeholder: 'a password',
      type: 'password'
    }
  ];

  return (
    <StyleContainer>
      <AuthForm type="register" fields={registerFields} />
    </StyleContainer>
  );
}

export default RegisterStructure;
