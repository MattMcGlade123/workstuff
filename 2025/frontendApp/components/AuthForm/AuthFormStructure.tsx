import React, { FC, FormEvent } from 'react';
import { ApolloError } from '@apollo/client';
import { StyledWrapper } from './AuthFormStyles';
import Form from '../Form';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

interface AuthFormStructureProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  fetchMessage: string;
  errorMessage: ApolloError | undefined;
  fields: FormField[];
}

const AuthFormStructure: FC<AuthFormStructureProps> = ({ 
  handleSubmit, 
  fetchMessage, 
  errorMessage,
  fields 
}) => {
  return (
    <StyledWrapper>
      {fetchMessage?.length > 0 && <p>{fetchMessage}</p>}
      {errorMessage && <p>{errorMessage.message}</p>}
      <Form 
        fields={fields}
        onSubmit={handleSubmit}
      />
    </StyledWrapper>
  );
};

export default AuthFormStructure; 