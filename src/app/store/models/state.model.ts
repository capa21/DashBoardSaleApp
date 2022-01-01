import { AccountsState } from "./account.model";
import { SalesState } from "./sale.model";
import { ShopsState } from "./shop.model";

export interface AppState {
  accounts: AccountsState,
  shops: ShopsState,
  sales: SalesState
}
