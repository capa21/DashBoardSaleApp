import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { ShopService } from "src/app/services/shop.service";
import { loadShops, loadShopsError, loadShopsSuccess } from "../actions/shops.action";

@Injectable()
export class ShopsEffect {
  constructor(private actions$: Actions,
              private shopService : ShopService) { }

  public loadShops$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadShops),
      tap(data => console.log('effect tap: ', data)),
      mergeMap(
        ( action ) => this.shopService.getShopsByAccount(action.id_account).pipe(
          map(shops => loadShopsSuccess({ Shops: shops })),
          tap(data => console.log('Effect shops: ', data)),
          catchError( err => of(loadShopsError({error: err})))
        )
      )
    )
  );
}
