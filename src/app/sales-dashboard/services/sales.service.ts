import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Shop } from 'src/app/models/shop.model';
import { Sale, SaleResposta } from '../models/sale.model';
import { SalesProxyService } from './sales-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private salesProxyService: SalesProxyService) { }

  getSalesByShop(idShop: number): Observable<SaleResposta> {
    return this.salesProxyService.getSales()
      .pipe(
        map((data: SaleResposta) => {
          const rows = data.rows.filter((sale: Sale) => sale.id_shop === idShop);
          return {
            total: rows.length,
            rows
          }
        })
      )
  }
}
