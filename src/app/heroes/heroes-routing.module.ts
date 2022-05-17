import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './pages/addHero/addHero.component';
import { ListComponent } from './pages/listHero/listHero.component';
import { SearchComponent } from './pages/searchHero/searchHero.component';
import { GetComponent } from './pages/getHero/getHero.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'list',
        component: ListComponent
      },
      {
        path:'add',
        component: AddComponent
      },
      {
        path:'edit/:id',
        component: AddComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path:':id',
        component: GetComponent
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
