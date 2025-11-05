'use client';

import { StyleContainer } from './LoginStyles';
import { FC } from 'react';
import LoginForm from '@/components/LoginForm';

const LoginStructure: FC = () => {
  return (
    <StyleContainer>
      <LoginForm />
    </StyleContainer>
  );
}

export default LoginStructure;
