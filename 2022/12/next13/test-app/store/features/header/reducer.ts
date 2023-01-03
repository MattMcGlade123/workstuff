/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import {
  setMenuData,
  setHeaderData,
} from './actions';

export const headerInitialState = {
  header: {
    logo: '',
    menu: [
      {
        href: "/",
        linkName: 'Home'
      },
      {
        href: "/pdp",
        linkName: 'Pdp'
      }
    ]
  },
};

export const headerReducer = createReducer(headerInitialState, (builder) => {
  builder
    .addCase(setHeaderData, (state, action) => {
      if (action.payload) {
        state.header = action.payload;
      }
    })
    .addCase(setMenuData, (state, action) => {
      if (action.payload) {
        state.header.menu = action.payload;
      }
    })
});
