import { useMemo } from 'react';
import { Action, configureStore, Dispatch, Store, ThunkAction } from '@reduxjs/toolkit';

import { initialState } from './features';
import { StoreState } from './features'
import { headerReducer } from './features/header'
import { basketReducer } from './features/basket';
import { pdpReducer } from './features/pdp';

export type AppDispatch = Dispatch;
export type RootState = StoreState;

// let store: Store | undefined;

// export const store = configureStore({
//   reducer: {
//     header: headerReducer,
//     basket: basketReducer,
//     pdp: pdpReducer
//   },
// })

export const initStore = (StoreState = initialState): Store =>
  configureStore({
    reducer: {
      header: headerReducer,
      basket: basketReducer,
      pdp: pdpReducer
    },
  });

