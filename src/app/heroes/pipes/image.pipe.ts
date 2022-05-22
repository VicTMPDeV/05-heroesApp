import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  // pure: false //Un pipe impuro se ejecuta en cada cambio de estado y un puro solo cuando se modifica el parametro de la función transform. El impuro consume más recursos. Por defecto es True.
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero ): string {

    console.log('Pipe imagen se ejecuta'); //flag para ver en consola cómo funcionan los pipes puros y los impuros
    
    if( !hero.id && !hero.alt_img){
      return 'assets/no-image.png';
    }else if( hero.alt_img ){
      return hero.alt_img;
    }else{
      return `assets/heroes/${hero.id}.jpg`;
    }


  }

}
