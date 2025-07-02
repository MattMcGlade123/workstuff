'use client';

import React, { FC, FormEvent, useEffect, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { updateIsAuth } from '@/features/auth';
import { validateData } from '@/utils/validateData';
import { SIGNIN, REGISTER } from '@/graphQl/queries';
import { SignInResponse, RegisterResponse } from '@/types/middleware-types';

import AuthFormStructure from './AuthFormStructure';

type AuthType = 'login' | 'register';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

interface AuthFormLogicProps {
  type: AuthType;
  fields: FormField[];
}

const AuthFormLogic: FC<AuthFormLogicProps> = ({ type, fields }) => {
  const dispatch = useDispatch();
  const [fetchMessage, setFetchMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<ApolloError>();

  const [signUserIn, { data: loginData, error: loginError }] = useMutation<{ signIn: SignInResponse, error: any }>(SIGNIN);
  const [registerUser, { data: registerData, error: registerError }] = useMutation<{ register: RegisterResponse, error: any }>(REGISTER);

  const cleanup = () => {
    setFetchMessage('');
    setErrorMessage(undefined);
    localStorage.removeItem('product-api-token');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cleanup();
    
    const formDataObject = new FormData(e.currentTarget);
    const completeData = Object.fromEntries(formDataObject.entries());

    if (type === 'login') {
      const userLoginData = {
        email: completeData.email as string,
        password: completeData.password as string,
      };

      const hasAllData = validateData(userLoginData);

      if (hasAllData) {
        signUserIn({
          variables: {
            input: userLoginData
          }
        });
      } else {
        setFetchMessage('Missing required data');
        setTimeout(() => {
          setFetchMessage('');
        }, 5000);
      }
    } else {
      const registerData = {
        email: completeData.email as string,
        username: completeData.username as string,
        password: completeData.password as string,
      };

      const hasAllData = validateData(registerData);

      if (hasAllData) {
        registerUser({
          variables: {
            input: registerData
          }
        });
      } else {
        setFetchMessage('Missing required data');
        setTimeout(() => {
          setFetchMessage('');
        }, 5000);
      }
    }
  };

  useEffect(() => {
    if (type === 'login') {
      if (loginError) {
        cleanup();
        setErrorMessage(loginError);
      } else if (loginData) {
        if (loginData?.error) {
          cleanup();
          setErrorMessage(loginData?.error);
        } else if (loginData?.signIn?.code === 403) {
          cleanup();
          setErrorMessage({ message: loginData.signIn.message } as ApolloError);
        } else if (loginData?.signIn?.code === 200) {
          setFetchMessage('Logged in successfully');
          setErrorMessage(undefined);
          if (loginData?.signIn?.token) {
            localStorage.setItem('product-api-token', loginData?.signIn.token);
          }
          dispatch(updateIsAuth(true));
        }
      }
    } else {
      if (registerError) {
        cleanup();
        setErrorMessage(registerError);
      } else if (registerData) {
        if (registerData?.error) {
          cleanup();
          setErrorMessage(registerData?.error);
        } else if (registerData?.register?.code === 400) {
          cleanup();
          setErrorMessage({ message: registerData.register.message } as ApolloError);
        } else if (registerData?.register?.code === 200) {
          setFetchMessage('Register successfully');
          setErrorMessage(undefined);
          if (registerData?.register?.token) {
            localStorage.setItem('product-api-token', registerData?.register.token);
          }
          dispatch(updateIsAuth(true));
        }
      }
    }
  }, [loginData, loginError, registerData, registerError, type, dispatch]);

  const componentProps = {
    handleSubmit,
    fetchMessage,
    errorMessage,
    fields
  };

  return <AuthFormStructure {...componentProps} />;
};

export default AuthFormLogic; 