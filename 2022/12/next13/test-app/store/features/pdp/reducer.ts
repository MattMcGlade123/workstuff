/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import {
  updateImageNumber,
} from './actions';

export const pdpInitialState = {
  currentImageNumber: null
};

export const pdpReducer = createReducer(pdpInitialState, (builder) => {
  builder
    .addCase(updateImageNumber, (state, action) => {
      if (action.payload !== null) {
        state.currentImageNumber = action.payload;
      }
    })
});
