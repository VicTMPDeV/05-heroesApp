import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

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
    default: false,
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

  constructor(private _heroesService: HeroesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _snackBar: MatSnackBar,
              private _dialog: MatDialog) {}

  ngOnInit(): void {

    if(!this._router.url.includes('edit')){
      return;
    }

    this._activatedRoute.params
      .pipe( //Captura el id de la Url en la que estoy al iniciar el componente addHero
        switchMap( ({id}) => this._heroesService.getHeroById(id) )
      )
      .subscribe( heroResponse => this.hero = heroResponse );

  }

  public save(){

    //Validación -> Si no le pongo nombre que es obligatorio, no guarda
    if( this.hero.superhero.trim().length === 0){
      return;
    }

    if( this.hero.id ){ //ACTUALIZAR

      this._heroesService.putHero( this.hero )
        .subscribe( (heroResponse) => {
          this.showSnackBar('Héroe Actualizado');
          console.log('Response:', 'Actualizando Héroe', heroResponse);
          this._router.navigate(['/heroes/list']); //redireccionando a la lista una vez producido el cambio, evitamos trabajar con pipes impuros
        });

    }else{ //CREAR
      
      this._heroesService.postHero(this.hero)
      .subscribe( (heroResponse) => {
        this.showSnackBar('Héroe Creado');
        console.log('Response:', 'Creando Héroe', heroResponse);
        this._router.navigate(['/heroes/list']); //redireccionando a la lista una vez producido el cambio, evitamos trabajar con pipes impuros
      });

    }

  }

  //BORRAR 
  public delete(){

    const dialog = this._dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {...this.hero} 
    });

    dialog.afterClosed()
      .subscribe( (result) => {
        if(result){
          this._heroesService.deleteHero( this.hero.id! )
            .subscribe( (resp) => {
              this._router.navigate(['/heroes/list']);
            });
        }
      }
    )
    
  }

  showSnackBar( message: string ){
    this._snackBar.open( message, 'Ok!', {
      duration: 2500
    });
  }

}
