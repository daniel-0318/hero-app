import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(private authService: AuthService, private rouer:Router){

  }

  onLogin(){
    this.authService.login('dani_0318@hotmail.com', '123456')
    .subscribe(user=>{
      this.rouer.navigate(['/']);
    })
  }

}
