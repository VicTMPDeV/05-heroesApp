import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {


  constructor( private _router: Router,
               private authService: AuthService ) { }

  
  public get getUser() {
    return this.authService.user;
  }
  

  ngOnInit(): void {
  }

  logOut(){
    this._router.navigate(['./auth']);
  }

}
