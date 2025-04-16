import { createReducer } from '@reduxjs/toolkit';
import { FavouriteState } from '../../custom-type'

import { updateFavouriteList } from './actions';

export const initialState: FavouriteState = {
  favList: [],
};

export const favouritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateFavouriteList, (state, action) => {
    state.favList = action.payload;
  });
});
