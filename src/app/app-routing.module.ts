import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ClientAuthGuard } from './auth/guards/client-auth.guard';
//NO IMPORTO AQUI EL AUTHMODULE, SE CARGA CON UNA PROMISE CON EL LAZY LOADING.

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule) //Lazy Loading
    
  },
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule), //Lazy Loading
    canLoad: [ ClientAuthGuard ],
    canActivate: [ ClientAuthGuard ] 
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
