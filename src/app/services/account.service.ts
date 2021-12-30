import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Accounts } from '../models/account.model';
import { AccountProxyService } from './account-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private accountProxyService: AccountProxyService) { }

  getAccounts(): Observable<Accounts> {
    return this.accountProxyService.getAccounts()
      .pipe(
        map( data => data.accounts)
      )
  }

}
