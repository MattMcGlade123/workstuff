'use client';

import React, { FC, FormEvent, useCallback, useState } from 'react';

import RegisterFormStructure from './RegisterFormStructure';
import { RegisterFormInt, RegisterResponse } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';
import { validateData } from '@/utils/validateData';


const RegisterFormLogic: FC = () => {
  const [fetchMessage, setFetchMessage] = useState('');
  const [formValues, setFormValues] = useState<RegisterFormInt>({
    email: '',
    username: '',
    password: '',
  });

  const handleType = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case 'email':
        setFormValues({
          ...formValues,
          email: value
        })

        break;
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
    const completeData = Object.fromEntries(formDataObject.entries()) as unknown as RegisterFormInt;
    const dataToValidate = {
      email: completeData.email,
      username: completeData.username,
      password: completeData.password,
    }

    const hasAllData = validateData(dataToValidate)

    if (hasAllData) {
      const { finalData, error } = await fetchData<RegisterResponse>('http://localhost:8080/auth/register', {
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
        setFetchMessage('You have been registered')
        if (finalData?.token) {
          localStorage.setItem('token', finalData?.token)
        }
        setFetchMessage(`Thank you ${finalData?.username} for registering`)
        e.currentTarget?.reset();
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

  return <RegisterFormStructure {...componentProps
  } />;
};

export default RegisterFormLogic;
