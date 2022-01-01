import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleResposta } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SalesProxyService {

  private url = 'assets/data/sales.json';

  constructor(private http: HttpClient) { }

  getSales(): Observable<SaleResposta> {
    return this.http.get<SaleResposta>(this.url);
  }
}
