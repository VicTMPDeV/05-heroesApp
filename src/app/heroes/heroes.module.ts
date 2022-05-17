//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'; //Angular Material
//My Modules
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
//My Components
import { HomeComponent } from './pages/home/home.component'; //Padre de los sucesivos
import { AddComponent } from './pages/addHero/addHero.component';
import { GetComponent } from './pages/getHero/getHero.component';
import { ListComponent } from './pages/listHero/listHero.component';
import { SearchComponent } from './pages/searchHero/searchHero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    GetComponent,
    ListComponent,
    SearchComponent,
    HeroCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
