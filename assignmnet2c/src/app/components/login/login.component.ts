import { Component } from '@angular/core';
import {Router} from'@angular/router';
import { HomeComponent } from '../home/home.component'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, ){}

  login(): void{
    this.router.navigate(['home'])
  }  

}
