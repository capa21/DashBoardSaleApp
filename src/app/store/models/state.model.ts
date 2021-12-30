import { AccountsState } from "./account.model";
import { ShopsState } from "./shop.model";

export interface AppState {
  accounts: AccountsState,
  shops: ShopsState
}
