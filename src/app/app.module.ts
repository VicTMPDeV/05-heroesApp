//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
//My Modules
import { AppRoutingModule } from './app-routing.module';
//My Components
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent //Como la carpeta shared no tiene un módulo, busca un módulo en el que declararlo en las carpetas padre, por eso lo declara aqui
  ],
  imports: [
    //TODO -> Preguntar a Efi
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, //Aquí porque los servicios van a ser proveídos de manera global -> Podríamos haber usado el fetch API de JS, pero con Observables tenemos más control
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
