import { SaleResposta } from "src/app/sales-dashboard/models/sale.model";

export interface SalesState {
  sales: SaleResposta,
  loaded: boolean,
  loading: boolean,
  error: any
}
