import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/aplicacion'
  // },
  // {
  //   path: 'aplicacion',
  //   component:AppComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'aplicacion',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
