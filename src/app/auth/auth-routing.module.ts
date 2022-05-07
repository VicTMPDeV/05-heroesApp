//Angular Modules
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//My Components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', //vacío porque lo voy a indicar en el app-routing con el Lazy Load
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
