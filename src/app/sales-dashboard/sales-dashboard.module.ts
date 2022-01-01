import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDashboardComponent } from './components/page/sales-dashboard/sales-dashboard.component';
import { HeaderDashboardComponent } from './components/header/header-dashboard/header-dashboard.component';
import { SearchComponent } from './components/header/search/search.component';
import { ViewsComponent } from './components/header/views/views.component';
import { FiltersComponent } from './components/header/filters/filters.component';
import { SalesShopComponent } from './components/main/sales-shop/sales-shop.component';
import { ActionsSaleComponent } from './components/main/actions-sale/actions-sale.component';
import { SelectedSalesComponent } from './components/main/selected-sales/selected-sales.component';
import { PagesSalesNavigationComponent } from './components/main/pages-sales-navigation/pages-sales-navigation.component';
import { SalesListComponent } from './components/main/sales-list/sales-list.component';
import { SaleItemComponent } from './components/main/sale-item/sale-item.component';
import { PagesSalesInformationComponent } from './components/footer/pages-sales-information/pages-sales-information.component';
import { SalesDashBoardRoutingModule } from './sales-dashboard.routing';


@NgModule({
  declarations: [
    SalesDashboardComponent,
    HeaderDashboardComponent,
    SearchComponent,
    ViewsComponent,
    FiltersComponent,
    SalesShopComponent,
    ActionsSaleComponent,
    SelectedSalesComponent,
    PagesSalesNavigationComponent,
    SalesListComponent,
    SaleItemComponent,
    PagesSalesInformationComponent
  ],
  imports: [
    CommonModule,
    SalesDashBoardRoutingModule
  ]
})
export class SalesDashboardModule { }
