import { createReducer } from '@reduxjs/toolkit';
import { SiteDataState } from '../../custom-type'

import { updateError, updateList, updateNoResults, updateSiteData } from './actions';

export const initialState: SiteDataState = {
  siteData: null,
  listData: null,
  noResults: false,
  error: "",
};

export const siteDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateSiteData, (state, action) => {
    state.siteData = action.payload;
  });
  builder.addCase(updateList, (state, action) => {
    state.listData = action.payload;
  });
  builder.addCase(updateNoResults, (state, action) => {
    state.noResults = action.payload;
  });
  builder.addCase(updateError, (state, action) => {
    state.error = action.payload;
  });
});
