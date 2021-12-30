import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AccountService } from "src/app/services/account.service";
import { loadAccounts, loadAccountsError, loadAccountsSuccess } from "../actions";

@Injectable()
export class AccountsEffect {
  constructor(private actions$: Actions,
              private accountService : AccountService) { }

  public loadAccounts$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadAccounts),
      mergeMap(
        () => this.accountService.getAccounts().pipe(
          map(accounts => loadAccountsSuccess({ accounts: accounts })),
          catchError( err => of(loadAccountsError({error: err})))
        )
      )
    )
  );
}
