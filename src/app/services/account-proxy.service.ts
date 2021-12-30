import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountsResponse } from '../models/account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountProxyService {
  private url = 'assets/data/accounts.json';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<AccountsResponse> {
    return this.http.get<AccountsResponse>(this.url);
  }

}
