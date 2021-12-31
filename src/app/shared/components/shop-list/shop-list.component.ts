import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Accounts } from 'src/app/models/account.model';
import { Shop } from 'src/app/models/shop.model';
import { AppState } from 'src/app/store/models/state.model';

@Component({
  selector: 'yuju-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopList: Shop[] = [];
  idAccountSelected = 0;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('shops').subscribe(({ shops }) => this.shopList = shops);
    this.store.select('accounts').subscribe(({ idSelected }) => this.idAccountSelected = idSelected);
  }

  selectShop() {
    this.router.navigate(['/aplicacion', this.idAccountSelected])
  }

}
