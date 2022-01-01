import { Action, createReducer, on } from "@ngrx/store";
import { loadSales, loadSalesError, loadSalesSuccess, updateShopSelected } from "../actions";

import { SalesState } from "../models/sale.model";

const initialState: SalesState  = {
  sales: {
    total: 10,
    rows: []
  },
  loaded: false,
  loading: false,
  error: null
}

const _salesReducer = createReducer(initialState,
  on(loadSales, (state) => ({ ...state, loading: true })),
  on(loadSalesSuccess, (state, { sales }) => ({
    ...state,
    loading: false,
    loaded: true,
    sales
  })),
  on(loadSalesError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  }))
);

export function salesReducer(salesState: (SalesState | undefined), action: Action) {
  return _salesReducer(salesState, action);
}
