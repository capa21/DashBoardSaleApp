import { Accounts } from "src/app/models/account.model";

export interface AccountsState {
  accounts: Accounts,
  idSelected: number,
  loaded: boolean,
  loading: boolean,
  error: any
}
