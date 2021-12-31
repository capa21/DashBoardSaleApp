import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopListComponent } from './components/shop-list/shop-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';



@NgModule({
  declarations: [
    ShopListComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ShopListComponent,
    AccountListComponent
  ]
})
export class SharedModule { }
