import { Component } from '@angular/core';
import {Router} from'@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {

  constructor(private router:Router, ){}

  signup(): void{
    this.router.navigate(['login'])
  }

}
