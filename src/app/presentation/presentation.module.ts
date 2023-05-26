import { NgModule } from "@angular/core";
import { PresentationRoutingModule } from "./presentation-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { OffersModule } from "./offers/offers.module";
import {CoreModule} from "@core/core.module";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [CommonModule, CoreModule, PresentationRoutingModule, OffersModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PresentationModule{}



