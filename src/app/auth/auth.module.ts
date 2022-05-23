//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//My Modules
import { AuthRoutingModule } from './auth-routing.module';
//My Components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
