import { createAction, props } from "@ngrx/store";
import { SaleResposta } from "src/app/sales-dashboard/models/sale.model";

export const loadSales = createAction('[Ventas] Cargar Ventas',
  props<{ id_shop: number}>()
);

export const loadSalesSuccess = createAction('[Ventas] Cargar Ventas Ok',
  props<{ sales: SaleResposta }>()
);

export const loadSalesError = createAction('[Ventas] Cargar Ventas Error',
  props<{ error: any }>()
);
