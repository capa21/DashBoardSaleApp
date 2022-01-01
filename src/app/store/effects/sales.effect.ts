import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { SalesService } from "src/app/sales-dashboard/services/sales.service";
import { loadSales, loadSalesError, loadSalesSuccess } from "../actions";

@Injectable()
export class SalesEffect {
  constructor(private actions$: Actions,
              private salesService : SalesService) { }

  public loadShops$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadSales),
      mergeMap(
        ( action ) => this.salesService.getSalesByShop(action.id_shop).pipe(
          map(sales => loadSalesSuccess({ sales: sales })),
          catchError( err => of(loadSalesError({error: err})))
        )
      )
    )
  );
}
