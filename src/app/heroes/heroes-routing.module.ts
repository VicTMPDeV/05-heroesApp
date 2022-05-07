import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { GetComponent } from './pages/get/get.component';

const routes: Routes = [
  {
    path:'',
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
