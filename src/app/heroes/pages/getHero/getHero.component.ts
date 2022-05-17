import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-get-hero',
  templateUrl: './getHero.component.html',
  styles: [
  ]
})
export class GetComponent implements OnInit {

  public hero!:Hero;

  constructor(private activatedRoute : ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.heroesService.getHeroById(id))
      )
      .subscribe( (hero) => this.hero = hero);
  }

}
