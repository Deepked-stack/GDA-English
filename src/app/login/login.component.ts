import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
     password: new FormControl('',Validators.required)
  });
  constructor(private router:Router, private apiservice:ApiService){}
  
  onLogin(){
    if(this.loginForm.valid){

      const {email,password} = this.loginForm.value;
      this.apiservice.login({email,password}).subscribe(
        (response)=>{
          console.log('login successful');
          const userId:number = response.userId;
          // alert('logged in')

          this.router.navigate(['/landingpage',userId]);
        },
        (error)=>{
          console.error('login failed',error);
                    alert('Invalid Credentials!');

        }
      );

    }
  }
}