'use client';

import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';

import RegisterFormStructure from './RegisterFormStructure';
import { RegisterFormInt } from '@/custom-type';
import { validateData } from '@/utils/validateData';
import { updateIsAuth } from '@/features/auth';
import { useDispatch } from 'react-redux';
import { REGISTER } from '@/graphQl/queries';
import { ApolloError, useMutation } from '@apollo/client';
import { RegisterResponse } from '@/types/middleware-types';

const RegisterFormLogic: FC = () => {
  const dispatch = useDispatch();
  const [fetchMessage, setFetchMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<ApolloError>();
  const [formValues, setFormValues] = useState<RegisterFormInt>({
    email: '',
    username: '',
    password: '',
  });

  const cleanup = () => {
    setFetchMessage('')
    setErrorMessage(undefined)
    localStorage.removeItem('product-api-token')
  }

  const [registerUser, { data, error }] = useMutation<{register: RegisterResponse, error: any}>(REGISTER);

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
    cleanup();
    const formDataObject = new FormData(e.currentTarget);
    const completeData = Object.fromEntries(formDataObject.entries()) as unknown as RegisterFormInt;
    const registerData = {
      email: completeData.email,
      username: completeData.username,
      password: completeData.password,
    }

    const hasAllData = validateData(registerData)

    if (hasAllData) {
      registerUser({
        variables: {
          input: registerData
        }
      })
    }
    else {
      setFetchMessage('Missing required data')

      setTimeout(() => {
        setFetchMessage('')
      }, 5000)
    }
  }

  useEffect(() => {
    if (data) {
      if (data?.error) {
        cleanup()
        setErrorMessage(data?.error)
      }
      else if (data?.register?.code === 400) {
        cleanup()
        setErrorMessage({ message: data.register.message } as ApolloError);
      }
      else if (data?.register?.code === 200) {
        setFetchMessage('Register successfully')
        setErrorMessage(undefined)
        if (data?.register?.token) {
          localStorage.setItem('product-api-token', data?.register.token)
        }
        dispatch(updateIsAuth(true));
      }
    }
  }, [data, error])

  const componentProps = {
    handleSubmit,
    handleType,
    fetchMessage,
    errorMessage
  }

  return <RegisterFormStructure {...componentProps
  } />;
};

export default RegisterFormLogic;
