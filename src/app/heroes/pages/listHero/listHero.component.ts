import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './listHero.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public heroesList: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroesServiceResponse => this.heroesList = heroesServiceResponse );
  }

}
