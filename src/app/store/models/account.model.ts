import { Accounts } from "src/app/models/account.model";

export interface AccountsState {
  accounts: Accounts,
  loaded: boolean,
  loading: boolean,
  error: any
}
