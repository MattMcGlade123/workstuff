import React, { FC, FormEvent } from 'react';
import { StyledWrapper } from './FormStyles';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

interface FormStructureProps {
  fields: FormField[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const FormStructure: FC<FormStructureProps> = ({ fields, onSubmit }) => {
  return (
    <StyledWrapper>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <fieldset key={field.name}>
            <label>{field.label}</label>
            <input 
              name={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder}
            />
          </fieldset>
        ))}
        <button type='submit'>Enter details</button>
      </form>
    </StyledWrapper>
  );
};

export default FormStructure; 