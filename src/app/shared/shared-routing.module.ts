import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/aplicacion'
  },
  {
    path: 'aplicacion/:id_account',
    loadChildren: () => import('../sales-dashboard/sales-dashboard.module').then( m => m.SalesDashboardModule)
  },
  {
    path: '**',
    redirectTo: 'aplicacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
