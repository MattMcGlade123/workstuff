/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import {
  updateAccordionStatus,
} from './actions';

export const initialState = {
  isOpen: false,
};

export const accordionReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateAccordionStatus, (state, action) => {
      state.isOpen = action.payload;
    });
});
