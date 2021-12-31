import { Action, createReducer, on } from "@ngrx/store";
import { loadAccounts, loadAccountsSuccess, loadAccountsError, updateAccountsSelected } from '../actions';
import { AccountsState } from "../models/account.model";

const initialState: AccountsState  = {
  accounts: {
    current: { name:'', id_account: 0 },
    others: []
  },
  idSelected: 0,
  loaded: false,
  loading: false,
  error: null
}

const _accountsReducer = createReducer(initialState,
  on(loadAccounts, state => ({ ...state, loading: true })),
  on(loadAccountsSuccess, (state, { accounts }) => ({
    ...state,
    idSelected: accounts.current.id_account,
    loading: false,
    loaded: true,
    accounts:  { ...accounts }
  })),
  on(loadAccountsError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(updateAccountsSelected, (state, { idSelected }) => ({
    ...state,
    idSelected
  }))
);

export function accountsReducer(accountsState: (AccountsState | undefined), action: Action) {
  return _accountsReducer(accountsState, action);
}
