import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginRoutingModule } from './login-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
