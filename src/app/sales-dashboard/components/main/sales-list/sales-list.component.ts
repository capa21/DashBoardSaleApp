import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SaleResposta } from 'src/app/sales-dashboard/models/sale.model';
import { loadSales } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models/state.model';

@Component({
  selector: 'yuju-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales: SaleResposta = {
    "total": 0,
    "rows": []
  }

  idShop = 0;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe(({ shop }) => {
        this.idShop = Number(shop);
        this.store.dispatch(loadSales({id_shop: this.idShop }))
      });

  }

  ngOnInit(): void {
    this.store.select('sales')
    .subscribe( ({ sales }) => this.sales = sales )
  }

}
