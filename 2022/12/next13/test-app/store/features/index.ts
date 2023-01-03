import { BasketState, HeaderState } from '../../types';
import { basketInitialState } from './basket';
import { headerInitialState } from './header/reducer';

export interface StoreState {
  header: HeaderState,
  basket: BasketState
}

export const initialState: StoreState = {
  header: headerInitialState,
  basket: basketInitialState
};