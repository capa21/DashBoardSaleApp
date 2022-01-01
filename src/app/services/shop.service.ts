import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Shop } from '../models/shop.model';
import { ShopProxyService } from './shop-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private shopProxyService: ShopProxyService) { }

  getShopsByAccount(idAccount: number): Observable<Shop[]> {
    return this.shopProxyService.getShops()
      .pipe(
        map(data => data.filter((shop: Shop) => shop.id_account === idAccount))
      )
  }

}
