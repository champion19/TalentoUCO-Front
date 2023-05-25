import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './offers/list/list.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'offers',
    loadChildren:()=>import('./offers/offers.module').then((module)=>module.OffersModule),
  },
  {
    path:"details",
    component: DetailsComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((module)=>module.DashboardModule),
  }
];
@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
