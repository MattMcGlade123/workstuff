'use client';

import React, { FC, FormEvent, useCallback, useState } from 'react';

import LoginFormStructure from './LoginFormStructure';
import { LoginFormInt, LoginResponse } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';
import { validateData } from '@/utils/validateData';
import { useDispatch } from 'react-redux';
import { updateIsAuth } from '@/features/auth';


const LoginFormLogic: FC = () => {
  const dispatch = useDispatch();
  const [fetchMessage, setFetchMessage] = useState('');
  const [formValues, setFormValues] = useState<LoginFormInt>({
    email: '',
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
    const completeData = Object.fromEntries(formDataObject.entries()) as unknown as LoginFormInt;
    const dataToValidate = {
      email: completeData.email,
      password: completeData.password,
    }

    const hasAllData = validateData(dataToValidate)

    if (hasAllData) {
      const { finalData, error } = await fetchData<LoginResponse>('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        setFetchMessage('Logged in successfully')
        if (finalData?.token) {
          localStorage.setItem('product-api-token', finalData?.token)
        }
        dispatch(updateIsAuth(true));
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
