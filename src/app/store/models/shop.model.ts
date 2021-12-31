import { Shop } from "src/app/models/shop.model";

export interface ShopsState {
  shops: Shop[],
  idSelected: number
  loaded: boolean,
  loading: boolean,
  error: any
}
