import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-add',
  templateUrl: './addHero.component.html',
  styles: [`
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

  constructor() {}

  ngOnInit(): void {}

  save(){
    console.log(this.hero);
  }


}
