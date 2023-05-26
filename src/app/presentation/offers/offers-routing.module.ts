import { NgModule, Component } from '@angular/core';
import{MainOffersComponent} from './main-offers/main-offers.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainOffersComponent

  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class OffersRoutingModule { }
