import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-get-hero',
  templateUrl: './getHero.component.html',
  styles: [`
    img {
      width:100%;
      border-radius:5px;
    }
  `]
})
export class GetComponent implements OnInit {

  public hero!:Hero;

  constructor(private _activatedRoute : ActivatedRoute,
              private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap(({id}) => this._heroesService.getHeroById(id))
        // switchMap((param: Params) => this._heroesService.getHeroById(param['id'])) //SIN DESESTRUCTURACIÓN
      )
      .subscribe( (hero: Hero) => this.hero = hero);
  }

  goBack(){
    this._router.navigate(['/heroes/list']);
  }

}
