import { Recipe } from '@/custom-type';
import { createAction } from '@reduxjs/toolkit';

export const updateSiteData = createAction<Recipe[]>('siteData/updateSiteData');
export const updateList = createAction<Recipe[] | null>('siteData/updateList');
export const updateNoResults = createAction<boolean>('siteData/updateNoResults');
export const updateError = createAction<string>('siteData/updateError');
