import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './addHero.component.html',
  styles: [`
    img {
      width:100%;
      border-radius:5px;
    }
    button{
      margin-top:1.5rem;
    }
  `]
})
export class AddComponent implements OnInit {

  public hero: Hero = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    if(!this.router.url.includes('edit')){
      return;
    }
    
    this.activatedRoute.params
      .pipe( //Captura el id de la Url en la que estoy al iniciar el componente addHero
        switchMap( ({id}) => this.heroesService.getHeroById(id) )
      )
      .subscribe( heroResponse => this.hero = heroResponse );

  }

  save(){

    //Validación -> Si no le pongo nombre que es obligatorio, no guarda
    if( this.hero.superhero.trim().length === 0){
      return;
    }

    if( this.hero.id ){ //ACTUALIZAR
      
      this.heroesService.putHero( this.hero )
        .subscribe( (heroResponse) => {
          this.router.navigate(['/heroes/list']);
          console.log('Response:', 'Actualizando Héroe', heroResponse);
        });

    }else{ //CREAR
      
      this.heroesService.postHero(this.hero)
      .subscribe( (heroResponse) => {
        this.router.navigate(['/heroes/list']);
        console.log('Response:', 'Creando Héroe', heroResponse);
      });

    }

  }

}
