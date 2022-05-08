import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  //TODO -> Preguntar a Efi
  providedIn: 'root' //Proveído de manera global - no afecta al lazy load
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }
}
