import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainOffersComponent } from './main-offers/main-offers.component';
import { OffersRoutingModule } from './offers-routing.module';



@NgModule({
  declarations: [
    MainOffersComponent
  ],
  exports: [
    MainOffersComponent
  ],
  imports:[
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
