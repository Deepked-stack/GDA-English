import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  predefinedUsername = 'sk';
  predefinedPassword = '@123';
onSubmit(form:any):void{
  const { username, password } = form.value;
  if (username === this.predefinedUsername && password === this.predefinedPassword) {
    // alert('Login successful!');
    this.router.navigate(['landingpage']);

  } else {
    alert('Invalid username or password!');
  }
}
}
