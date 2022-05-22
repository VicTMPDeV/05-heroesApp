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

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  //READ
  public getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this._baseUrl}/heroes`);
  }

  //READ
  public getHeroById( idHeroRequest: string ): Observable<Hero> {
    return this.http.get<Hero>(`${this._baseUrl}/heroes/${idHeroRequest}`);
  }

  //READ
  public getSuggested( valueRequest: string, elem: number ): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this._baseUrl}/heroes?q=${valueRequest}&_limit=${elem}`);
  }

  //CREATE 
  public postHero ( heroRequest: Hero ): Observable<Hero>{
    return this.http.post<Hero>(`${this._baseUrl}/heroes`, heroRequest);
  }

  //UPDATE
  public putHero ( heroRequest: Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this._baseUrl}/heroes/${heroRequest.id}`, heroRequest);
  }

  //DELETE
  public deleteHero ( id: string ): Observable<Hero>{
    return this.http.delete<Hero>(`${this._baseUrl}/heroes/${id}`);
  }
  
}
