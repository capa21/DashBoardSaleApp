import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopProxyService {

 private url = 'assets/data/shops.json';

  constructor(private http: HttpClient) { }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }
}
