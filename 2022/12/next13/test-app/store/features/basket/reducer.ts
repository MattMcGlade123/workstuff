/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import {
  updateBasket,
} from './actions';

export const basketInitialState = {
  basket: []
};

export const basketReducer = createReducer(basketInitialState, (builder) => {
  builder
    .addCase(updateBasket, (state, action) => {
      if (action.payload) {
        state.basket = action.payload;
      }
    })
});
