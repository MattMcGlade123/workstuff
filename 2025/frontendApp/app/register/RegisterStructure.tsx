'use client';

import { StyleContainer } from './RegisterStyles';
import { FC } from 'react';
import RegisterForm from '@/components/RegisterForm';

const RegisterStructure: FC = () => {
  return (
    <StyleContainer>
      <RegisterForm />
    </StyleContainer>
  );
}

export default RegisterStructure;
