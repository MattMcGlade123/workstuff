import { Recipe } from "@/custom-type";
import { RootState } from "@/lib/store";

export const selectSiteData = (state: RootState): Recipe[] | null => state.siteData.siteData;
export const selectListData = (state: RootState): Recipe[] | null => state.siteData.listData;
export const selectNoResults = (state: RootState): boolean => state.siteData.noResults;
export const selectError = (state: RootState): any => state.siteData.error;
