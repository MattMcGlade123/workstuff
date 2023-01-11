'use client';
import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { initStore } from '../../store';

const ReduxWrapper: FC = ({ children }) => {
  const finalStore = initStore();

  return (
    <ReduxProvider store={finalStore}>
      {children}
    </ReduxProvider>
  );
}

export default ReduxWrapper