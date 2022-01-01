import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Accounts } from './models/account.model';
import { Shop } from './models/shop.model';
import { loadAccounts } from './store/actions';
import { loadShops } from './store/actions/shops.action';
import { AppState } from './store/models/state.model';

@Component({
  selector: 'yuju-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Accounts = { current: { name: '', id_account: 0}, others: []}
  shops: Shop[] = [];

  selectAccount: FormControl = new FormControl();
  selectShop: FormControl = new FormControl('Seleciona tu tienda');

  currentIdAccount = 0;

  constructor(
    private store: Store<AppState>,
    private router: Router,

  ) {

    this.store.dispatch(loadAccounts());
    this.store.select('accounts')
      .subscribe(({ accounts }) => {
        this.accounts = accounts;
        this.currentIdAccount = this.accounts.current.id_account;
        this.loadShopsByAccount();
      })

    this.store.select('shops')
    .subscribe( ({shops}) => this.shops = shops )
  }

  private loadShopsByAccount() {
    this.router.navigate(['aplicacion', this.currentIdAccount]);
    this.store.dispatch(loadShops({ id_account: this.currentIdAccount }));
  }

  changeAccount() {
    this.currentIdAccount = Number(this.selectAccount.value);
    this.loadShopsByAccount();
  }

  changeShop() {
    this.router.navigate(['aplicacion', this.currentIdAccount, 'subaplicacion'], {queryParams: {'shop': this.selectShop.value}})
  }

}
