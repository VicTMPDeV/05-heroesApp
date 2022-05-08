import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  //TODO -> Preguntar a Efi
  providedIn: 'root' //Proveído de manera global - no afecta al lazy load
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  public getHeroes(){
    return this.http.get('http://localhost:3000/heroes')
  }
}
