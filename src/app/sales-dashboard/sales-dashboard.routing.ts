import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDashboardComponent } from './components/page/sales-dashboard/sales-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/subaplicacion'
  },
  {
    path: 'subaplicacion',
    component:SalesDashboardComponent
  },
  {
    path: '**',
    redirectTo: 'subaplicacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDashBoardRoutingModule { }
