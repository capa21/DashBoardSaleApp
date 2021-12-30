import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./models/state.model";
import { accountsReducer, shopsReducer } from "./reducers";

export const appReducer: ActionReducerMap<AppState> = {
  accounts: accountsReducer,
  shops: shopsReducer,
}

