import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { HomeModule } from '@home/home.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from '@core/service/http/http.service';
import { VehicleModule } from '@vehicle/vehicle.module';
import { Interceptor } from '@core/interceptor/token-interceptor';
import { AuthModule } from "@auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AuthModule,
    VehicleModule
  ],
  providers: [ CookieService, HttpService, Interceptor ],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
})
export class AppModule { }
