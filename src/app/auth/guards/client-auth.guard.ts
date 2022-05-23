import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard implements CanLoad, CanActivate {

  constructor( private _authService: AuthService,
               private _router: Router ){}
  
  /* CanActivate es quien realmente controla el acceso a las rutas */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this._authService.checkAuthenticationStatus()
      .pipe(
        tap( (isAuthenticated) => { //Si NO está autenticado...
          if(!isAuthenticated){
            this._router.navigate(['./auth/login']);
          }
        })
      );
    // if(this._authService.user.id){ //Si existe el usuario dejalo pasar
    //   return true;
    // }
    // console.log('Bloqueado por el AuthGuard - CanActivate');
    // return false; //Si no existe, bloqueo el acceso
  }

  /* CanLoad solo previene de la carga del módulo (SOLO SI USAMOS LAZY LOAD, SI NO LO USAMOS CON CAN ACTIVATE ES SUFICIENTE)
    (si estaba previamente cargado, aunque no se autentique 
      el usuario, podrá entrar porque la ruta está
    activa mientras no restrinjamos con canActivate) */
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
    return this._authService.checkAuthenticationStatus()
      .pipe(
        tap( (isAuthenticated) => { //Si NO está autenticado...
          if(!isAuthenticated){
            this._router.navigate(['./auth/login']);
          }
        })
      );
    // if(this._authService.user.id){ //Si existe el usuario dejalo pasar
    //   return true;
    // }
    // console.log('Bloqueado por el AuthGuard - CanLoad');
    // return false; //Si no existe, bloqueo el acceso
  }

}
