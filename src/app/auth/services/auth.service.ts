import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuthentication } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _user: UserAuthentication | undefined;

  constructor( private http: HttpClient ) { }

  
  get user(): UserAuthentication {
    return { ...this._user!}; //evito la mutabilidad del user
  }
  

  login(){
    return this.http.get<UserAuthentication>(`${ this._baseUrl }/usuarios/1`)
      .pipe(
        tap( user => {
          this._user = user;
          localStorage.setItem('token', user.id);
        })
        //ANOTHER WAY TO USE tap()
        // tap(  user => this._user = user),
        // tap(  user => localStorage.setItem('token', user.id))
      );
  }

  //checkAuthentication - Version Observable
  checkAuthenticationStatus(): Observable<boolean> {
    //Si no hay ningún token almacenado, te echo de la aplicación al login
    if( !localStorage.getItem('token') ){
      return of(false);
    }
    //Si tenemos un token, vamos a verificar que es el que nos trae el backend
    return this.http.get<UserAuthentication>(`${ this._baseUrl }/usuarios/1`)
      .pipe(
        map( user => {
          this._user = user;
          return true;
        })
      );
  }

  //checkAuthentication - Version boolean
  // checkAuthentication(): Observable<boolean> | boolean{
  //   if( !localStorage.getItem('token') ){
  //     return false;
  //   }
  //   return true;
  // }

  logout() {
    this._user = undefined;
  }
}
