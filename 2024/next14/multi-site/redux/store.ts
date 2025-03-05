'use client'

import { useMemo } from 'react';
import { Action, configureStore, Dispatch, Store, ThunkAction } from '@reduxjs/toolkit';

import { accordionReducer } from './features/accordion';

const initialState = {
  accordion: {
    isOpen: false
  }
}

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production"
});
