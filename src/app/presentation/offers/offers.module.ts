import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOffersComponent } from './main-offers/main-offers.component';
import { OffersRoutingModule } from './offers-routing.module';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    MainOffersComponent,
    ListComponent
  ],
  exports: [
    MainOffersComponent,
    ListComponent

  ],
  imports:[
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
