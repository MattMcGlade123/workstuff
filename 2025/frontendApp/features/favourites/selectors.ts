import { RootState } from "@/lib/store";

export const selectFavList = (state: RootState): number[] => state.favourites.favList;
