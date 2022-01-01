import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAccountComponent } from './components/welcome-account/welcome-account.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'aplicacion/:id',
    pathMatch: 'full'
  },
  {
    path: 'aplicacion/:id',
    component: WelcomeAccountComponent
  },
  {
    path: 'aplicacion/:id/subaplicacion',
    loadChildren: () => import('./sales-dashboard/sales-dashboard.module').then(m => m.SalesDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
