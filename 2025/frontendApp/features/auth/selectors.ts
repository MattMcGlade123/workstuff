import { RootState } from "@/lib/store";

export const selectIsAuth = (state: RootState): boolean => state.auth.isAuth;
