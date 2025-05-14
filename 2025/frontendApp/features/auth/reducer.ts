import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../custom-type'

import { updateIsAuth } from './actions';

export const initialState: AuthState = {
  isAuth: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateIsAuth, (state, action) => {
    state.isAuth = action.payload;
  });
});
