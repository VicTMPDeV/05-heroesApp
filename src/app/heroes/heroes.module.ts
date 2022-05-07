//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//My Modules
import { HeroesRoutingModule } from './heroes-routing.module';
//My Components
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { GetComponent } from './pages/get/get.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';




@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    GetComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
