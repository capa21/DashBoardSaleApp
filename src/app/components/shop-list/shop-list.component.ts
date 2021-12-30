import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Shop } from 'src/app/models/shop.model';
import { AppState } from 'src/app/store/models/state.model';

@Component({
  selector: 'yuju-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopList: Shop[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('shops').subscribe( ({shops} ) => this.shopList = shops )
  }

}
