import { createAction, props } from "@ngrx/store";
import { Account, Accounts } from "src/app/models/account.model";

export const loadAccounts = createAction('[Cuentas] Cargar Cuentas');

export const loadAccountsSuccess = createAction('[Cuentas] Cargar Cuentas Ok',
  props<{ accounts: Accounts }>()
);

export const loadAccountsError = createAction('[Cuentas] Cargar Cuentas Error',
  props<{ error: any }>()
);

export const updateAccountSelected = createAction('[Cuentas] Actualizar cuenta seleccionada',
  props<{ current: Account }>()
);
