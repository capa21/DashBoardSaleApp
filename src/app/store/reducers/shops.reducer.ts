import { Action, createReducer, on } from "@ngrx/store";
import { updateAccountSelected } from "../actions";

import { loadShops, loadShopsError, loadShopsSuccess, updateShopSelected } from "../actions/shops.action";
import { ShopsState } from "../models/shop.model";

const initialState: ShopsState  = {
  shops: [],
  idSelected: 0,
  loaded: false,
  loading: false,
  error: null
}

const _shopsReducer = createReducer(initialState,
  on(loadShops, (state) => ({ ...state, loading: true })),
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
  on(updateShopSelected, (state, { selectedShop }) => ({
    ...state,
    idSelected: selectedShop
  })),
);

export function shopsReducer(shopsState: (ShopsState | undefined), action: Action) {
  return _shopsReducer(shopsState, action);
}
