//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'; //Angular Material
//My Modules
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
//My Components
import { HomeComponent } from './pages/home/home.component'; //Padre de los sucesivos
import { AddComponent } from './pages/add/add.component';
import { GetComponent } from './pages/get/get.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';




@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    GetComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
