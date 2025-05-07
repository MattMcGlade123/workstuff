
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
          <label>Enter Slug</label>
          <input name='slug' placeholder='/example-slug' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Product Name</label>
          <input name='name' placeholder='A hat' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Price as number</label>
          <input name='price' placeholder='100' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Image URL</label>
          <input name='image-url' placeholder='http://www.image.com' onChange={handleType} />
        </fieldset>
        <fieldset>
          <label>Enter Alt</label>
          <input name='image-alt' placeholder='This is an image of a hat' onChange={handleType} />
        </fieldset>
        <button type='submit'>Enter details</button>
      </form>
    </StyledWrapper>
  );
};

export default LoginFormStructure;
