import { createAction, props } from "@ngrx/store";
import { Shop } from "src/app/models/shop.model";

export const loadShops = createAction('[Tiendas] Cargar Tiendas',
  props<{ id_account: number}>()
);

export const loadShopsSuccess = createAction('[Tiendas] Cargar Tiendas Ok',
  props<{ Shops: Shop[] }>()
);

export const loadShopsError = createAction('[Tiendas] Cargar Tiendas Error',
  props<{ error: any }>()
);
