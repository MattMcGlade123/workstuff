
import React, { ChangeEvent, FC, FormEvent } from 'react';

import {
  StyledWrapper
} from './LoginFormStyles';

interface LoginFormStructureProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleType: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchMessage: string;
}

const LoginFormStructure: FC<LoginFormStructureProps> = ({ handleSubmit, handleType, fetchMessage }) => {
  return (
    <StyledWrapper>
      {fetchMessage?.length > 0 && <p>{fetchMessage}</p>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Enter Email</label>
          <input name='email' placeholder='A email' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Password</label>
          <input name='password' placeholder='A password' onChange={handleType} />
        </fieldset>
        <button type='submit'>Enter details</button>
      </form>
    </StyledWrapper>
  );
};

export default LoginFormStructure;
