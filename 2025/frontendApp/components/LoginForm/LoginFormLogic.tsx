'use client';

import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';

import { ApolloError, useMutation } from '@apollo/client';

import LoginFormStructure from './LoginFormStructure';
import { LoginFormInt } from '@/custom-type';
import { validateData } from '@/utils/validateData';
import { useDispatch } from 'react-redux';
import { updateIsAuth } from '@/features/auth';
import { SIGNIN } from '@/graphQl/queries';
import { SignInResponse } from '@/types/middleware-types';


const LoginFormLogic: FC = () => {
  const dispatch = useDispatch();
  const [fetchMessage, setFetchMessage] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<ApolloError>();
  const [formValues, setFormValues] = useState<LoginFormInt>({
    email: '',
    password: '',
  });

  const [signUserIn, { data, error }] = useMutation<{ signIn: SignInResponse, error: any }>(SIGNIN);

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
    const userLoginData = {
      email: completeData.email,
      password: completeData.password,
    }

    const hasAllData = validateData(userLoginData)

    if (hasAllData) {
      signUserIn({
        variables: {
          input: userLoginData
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
    if (error) {
      setErrorMessage(error)
    }
    else if (data) {
      if (data?.error) {
        setFetchMessage('')
        setErrorMessage(data?.error)
      }
      else if (data?.signIn?.code === 403) {
        console.log('data', data.signIn.message)
        setFetchMessage('')
        setErrorMessage({ message: data.signIn.message } as ApolloError);
      }
      else {
        setFetchMessage('Logged in successfully')
        if (data?.signIn?.token) {
          localStorage.setItem('product-api-token', data?.signIn.token)
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

  return <LoginFormStructure {...componentProps
  } />;
};

export default LoginFormLogic;
