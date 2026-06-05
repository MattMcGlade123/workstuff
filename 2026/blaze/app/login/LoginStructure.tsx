import React, { FC } from 'react';
import { Button, Flex, TextInput, Title } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

import { LoginInterface } from '../../shared/types/customTypes';

interface LoginStructureProps {
  loginForm: UseFormReturnType<LoginInterface>;
  handleLoginSubmit: (formValues: LoginInterface) => void;
}

const LoginStructure: FC<LoginStructureProps> = ({ loginForm, handleLoginSubmit }) => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Title order={1} mb="xl" ta="center">
        Login in
      </Title>
      <form
        onSubmit={loginForm.onSubmit((values) => {
          handleLoginSubmit({
            email: values.email,
            password: values.password,
          });
        })}
      >
        <TextInput
          withAsterisk
          label="Email"
          key={loginForm.key('email')}
          {...loginForm.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Password"
          key={loginForm.key('password')}
          {...loginForm.getInputProps('password')}
        />
        <Flex mt={'md'} gap={'md'}>
          <Button variant="default" type="submit">
            Confirm
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default LoginStructure;
