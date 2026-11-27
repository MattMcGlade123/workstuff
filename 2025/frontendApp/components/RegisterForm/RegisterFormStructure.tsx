
import React, { ChangeEvent, FC, FormEvent } from 'react';

import {
  StyledWrapper
} from './RegisterFormStyles';
import { ApolloError } from '@apollo/client';

interface RegisterFormStructureProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleType: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchMessage: string;
  errorMessage: ApolloError | undefined;
}

const RegisterFormStructure: FC<RegisterFormStructureProps> = ({ handleSubmit, handleType, fetchMessage, errorMessage }) => {
  return (
    <StyledWrapper>
      {fetchMessage?.length > 0 && <p>{fetchMessage}</p>}
      {errorMessage && <p>{errorMessage.message}</p>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Enter email</label>
          <input name='email' placeholder='test@testing.com' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Username</label>
          <input name='username' placeholder='username' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Password</label>
          <input name='password' placeholder='a password' onChange={handleType} />
        </fieldset>
        <button type='submit'>Enter details</button>
      </form>
    </StyledWrapper>
  );
};

export default RegisterFormStructure;
