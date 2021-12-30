import { Action, createReducer, on } from "@ngrx/store";

import { loadShops, loadShopsError, loadShopsSuccess } from "../actions/shops.action";
import { ShopsState } from "../models/shop.model";

const initialState: ShopsState  = {
  shops: [],
  loaded: false,
  loading: false,
  error: null
}

const _shopsReducer = createReducer(initialState,
  on(loadShops, (state, {id_account}) => ({ ...state, loading: true })),
  on(loadShopsSuccess, (state, { Shops }) => ({
    ...state,
    loading: false,
    loaded: true,
    shops:   [...Shops]
  })),
  on(loadShopsError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
);

export function shopsReducer(shopsState: (ShopsState | undefined), action: Action) {
  return _shopsReducer(shopsState, action);
}
