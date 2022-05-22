import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  // pure: false //Un pipe impuro se ejecuta en cada cambio de estado y un puro solo cuando se modifica el parametro de la función transform. El impuro consume más recursos. Por defecto es True.
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero ): string {

    // console.log('Pipe imagen se ejecuta'); //flag para ver en consola cómo funcionan los pipes puros y los impuros
    
    if( !hero.default && !hero.alt_img ){ //Al crearlo no tiene ninguna de las dos
      return 'assets/no-image.png';
    }else if( !hero.default && hero.alt_img ){ //Añadido por el usuario con una url externa
      return hero.alt_img;
    }else{ //Los que vienen por defecto con la imagen asociada al id
      return `assets/heroes/${hero.id}.jpg`;
    }

  }

}
