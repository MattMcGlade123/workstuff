'use client';

import React, { FC, FormEvent, useCallback, useState } from 'react';

import LoginFormStructure from './LoginFormStructure';
import { AddResponse, FormFields, LoginFormInt } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';
import { validateData } from '@/utils/validateData';


const LoginFormLogic: FC = () => {
  const [fetchMessage, setFetchMessage] = useState('');
  const [formValues, setFormValues] = useState<LoginFormInt>({
    username: '',
    password: '',
  });

  const handleType = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case 'username':
        setFormValues({
          ...formValues,
          username: value
        })

        break;

      case 'password':
        setFormValues({
          ...formValues,
          password: value
        })

        break;

      case 'price':
        setFormValues({
          ...formValues,
          price: Number(value)
        })

        break;

      default:
        setFormValues({
          ...formValues
        })

        break;
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObject = new FormData(e.currentTarget);
    const completeData = Object.fromEntries(formDataObject.entries()) as unknown as FormFields;
    const dataToValidate = {
      slug: completeData.slug,
      name: completeData.name,
      price: Number(completeData.price),
      image: {
        url: completeData['image-url'],
        alt: completeData['image-alt']
      }
    }
    console.log('completeData', completeData)
    const hasAllData = validateData(dataToValidate)
    console.log('hasAllData', hasAllData)

    if (hasAllData) {
      const { finalData, error } = await fetchData<{ data: AddResponse, error: any }>('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToValidate),
      })

      if (error) {
        setFetchMessage(error)
      }
      else if (finalData?.error) {
        setFetchMessage(finalData?.error)
      }
      else {
        setFetchMessage('Product Added')
        e.currentTarget.reset();
      }
    }
    else {
      setFetchMessage('Missing required data')

      setTimeout(() => {
        setFetchMessage('')
      }, 5000)
    }
  }

  const componentProps = {
    handleSubmit,
    handleType,
    fetchMessage
  }

  return <LoginFormStructure {...componentProps
  } />;
};

export default LoginFormLogic;
