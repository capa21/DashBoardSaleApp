import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Accounts } from 'src/app/models/account.model';
import { loadAccounts } from 'src/app/store/actions';
import { loadShops } from 'src/app/store/actions/shops.action';
import { AppState } from 'src/app/store/models/state.model';

@Component({
  selector: 'yuju-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accountSelected: FormControl = new FormControl('');

  accounts: Accounts = {
    current: { name: '', id_account: 0 },
    others: []
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadAccounts());

    this.store.select('accounts')
      .subscribe(({accounts}) => this.accounts = accounts)
  }

  changeAccount() {
    this.store.dispatch(loadShops({ id_account: Number(this.accountSelected.value) }));
  }

}
