import React, { FC, FormEvent } from 'react';
import FormStructure from './FormStructure';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

interface FormLogicProps {
  fields: FormField[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const FormLogic: FC<FormLogicProps> = ({ fields, onSubmit }) => {
  const componentProps = {
    fields,
    onSubmit
  };

  return <FormStructure {...componentProps} />;
};

export default FormLogic; 