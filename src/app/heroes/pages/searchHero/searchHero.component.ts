//Angular
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
//My Interface
import { Hero } from '../../interfaces/heroes.interface';
//My Service
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './searchHero.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public searchValue: string = '';
  public heroesList: Hero[] = [];
  public selectedHero!: Hero | undefined;
  
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {}

  search(){
    this.heroesService.getSuggested(this.searchValue.trim(), 5)
      .subscribe( ( heroesResponse ) => { this.heroesList = heroesResponse } );
  }

  selectedOption(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchValue = hero.superhero;
    this.heroesService.getHeroById(hero.id!) //si no pongo ! me indica un error porque pudiera ser que viniera null del evento
      .subscribe((hero) => {this.selectedHero = hero});
  }



}
