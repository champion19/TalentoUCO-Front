import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentationModule { }
