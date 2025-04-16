import { createAction } from '@reduxjs/toolkit';

export const updateFavouriteList = createAction<number[]>('favourites/updateFavouriteList');
