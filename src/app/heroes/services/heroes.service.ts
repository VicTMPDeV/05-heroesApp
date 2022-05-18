import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  //TODO -> Preguntar a Efi
  providedIn: 'root' //Proveído de manera global - no afecta al lazy load
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]>{

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }

  public getHeroById(id: string): Observable<Hero> {

    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`);

  }
}
